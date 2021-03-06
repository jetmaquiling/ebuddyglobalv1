import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/caveats/chat.module.css'
import { socket } from '@/config/web-sockets'
import TextField from '@material-ui/core/TextField'
import ChatMessage from './chatmessage'
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import config from '@/config/configuration.json';
import axios from 'axios';
import qs from 'qs'
import Link from 'next/link'
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Router from 'next/router'


  function scrollToBottom (id) {
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
 }


 
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return ca;
}



function randomNumber() {
    return Math.floor(Math.random() * 10000000) + 1;
}



export default function Chat({online}) {
    const [first, setFirst] = React.useState(true)
    const [open, setOpen] = React.useState(false)
    const [messages, setMessages] =  React.useState([]);
    const [userData, setUserData] =  React.useState();
    const [message, setMessage] =  React.useState([]);
    const [search, setSearch] =  React.useState();
    const [feature, setFeature] = React.useState([])
    const [load , setLoad] = React.useState(false)
    const [question, setQuestion] = React.useState("")
    const [mobile, setMobile] = React.useState(true)

    React.useEffect(() => {

        async function getBlog() { 
            try{
                setLoad(true)
                const query = qs.stringify({ _where: { _or:[{"subject": "FAQ"}]} });
                const newdata = await axios.get(`${config.SERVER_URL}/blogs?${query}`);
                console.log("nEw Data",newdata.data);
                setFeature(newdata.data);
                setLoad(false)
            }catch(err){
                console.log("second request",err)
            }
            
        }
   
        getBlog()
        

    }, [])

    function checkCookie() {
        let username = getCookie("userId")
        let room = getCookie("roomId")
        console.log(username)
        if (username[0] === "") {
            return
        } else {
            console.log("REQUESTIN MY DATA")
            socket.emit('join', { username, room, accounted: true}, (error) => {
                if(error) {
                    alert(error);
                } else {
                    setCookie("userId", username, 3)
                    setCookie("roomId", room, 3)
                    setFirst(false);
                }
            }); 
            
        }
    }


    const redirectUser = (message) =>{
        try {
            
            if(message.user === 'CSR'){
                const item = message.text.split(" ", 2)
                if(item[0] == "REDIRECT"){
                    Router.push(item[1])
                }
            }
            
        }catch(error){

        }
        
    }
    

    const toggle =  function() {
        setOpen(!open)
    }

    //This is For Coversation Panel ******************************
    const handleChange = (e) => {
        var numberOfLineBreaks = (e.target.value.match(/\n/g)||[]).length;
        if(numberOfLineBreaks == 1){
            handleClick()
        }
        const value = e.target.value.replace(/[\r\n\v]+/g, "");
        setMessage(e.target.value);
    }
    const onMessageEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleClick()
        }
    }


    const handleClick = (e) => {
   
        if(message) {
            
            socket.emit('sendMessage',{ userData, message, messages }, (error) => {
                if(error) {
                    alert(error)
                    history.push('/join');
                }
            });
            
            setMessage('')
        } else {
            alert("Message can't be empty")
        }
    }





    //This is for Search Panel ******************************
    const onSetSearch = (e) => {
        var numberOfLineBreaks = (e.target.value.match(/\n/g)||[]).length;
        if(numberOfLineBreaks == 1){
            onSearch()
        }
        const value = e.target.value.replace(/[\r\n\v]+/g, "");
        setSearch(e.target.value);
    }

    const onSearchEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSearch()
        }
    }
    
    const onSearch = async (e) => {
        if(search == ""){ return }
        setFeature([]);
        setLoad(true)
        try{
            const query = qs.stringify({ 
                _where: { 
                    _or:[{"subject_contains": search}, {"content_contains": search},{"title_contains": search}, {"description_contains": search}, {"tag_contains": search} ]} });
            console.log(query)
            const newdata = await axios.get(`${config.SERVER_URL}/blogs?${query}&_limit=10`);
            console.log("nEw Data",newdata.data);
            setFeature(newdata.data);
            setQuestion(search)
            setSearch("")
            setLoad(false)

        }catch(err){
            console.log("second request",err)
            setFeature([]);
            setLoad(false)
        }
    }
      




    React.useEffect(() => {
        checkCookie()

        socket.on('welcome', (data) => {
            console.log("effect",data)
            setUserData(data);
            if(typeof data.conversation.messages == "string"){
                setMessages(JSON.parse(data.conversation.messages))
            }else{
                setMessages(data.conversation.messages)
            }
           
            scrollToBottom("userMessageBox")
        });
        
        socket.on('deliverClientMessages', (message, error)  =>{
            setMessages(msgs => [ ...msgs, message ]);
            redirectUser(message)
            scrollToBottom("userMessageBox")
        });
    
        socket.on('resetCookies', (e) => {
            console.log("RESETTING COOKIE")
            setFirst(true)
        });
        
     
        
    }, [])

 
 


    const handleStart = (e) => {
        const service =  question == "" ? "Assist: Need Help" : `Assist: ${question}` ;
        const username = `user_${randomNumber()}`
        const room = `room_${randomNumber()}`

        socket.emit('join', { username, room, service }, (error) => {
            if(error) {
                console.log(error)
            } else {
                setCookie("userId", username, 3)
                setCookie("roomId", room, 3)
                setFirst(false);
                socket.on('welcome', (data) => {
                    console.log("conve",data)
                    setUserData(data);
                    setMessages(JSON.parse(data.conversation.messages))
                });
            }
        }); 
    }

    const testChange = () => {
        setMobile(!mobile)
    }
    


  return (
    <div className={styles.main}>
    
        <div className={open && !first ? styles.container : styles.offcontainer} >
            <div className={styles.head}>
                <h4 className={styles.label1}>Customer Service Representative</h4>
                <div className={styles.label2} onClick={toggle}><CloseIcon/></div>
            </div>
        
            <div className={styles.messageBox} id="userMessageBox">
                <ChatMessage conversation={messages} setFirst={setFirst}/>
            </div>


            <div className={styles.inputBox}>
                <TextField
                id="outlined-multiline-static"
                placeholder="Aa..."
                multiline
                variant="outlined"
                value={message}
                onKeyPress={onMessageEnter}
                onChange={handleChange}
                
                />
                <h4 className={styles.sendButton} onClick={handleClick} > <SendIcon style={{fontSize: '20px', color: '#1877F2'}}/></h4>
            </div>
                
        </div>

        <div  className={`${mobile ? styles.onKeyboard : styles.offKeyboard } ${open && first ? styles.container : styles.offcontainer}`} >
            <div className={styles.head}>
                <h4 className={styles.label1}>What can I help you with?</h4>
                <div className={styles.label2} ><ExpandLessIcon onClick={testChange}/> <CloseIcon onClick={toggle}/></div>
            </div>
            <div  className={styles.inputBox} style={{position:  "sticky"}}>
                <TextField
                id="outlined-multiline-static"
                placeholder="Search here."
                multiline
                variant="outlined"
                value={search}
                onKeyDown={onSearchEnter}
                onChange={onSetSearch}
                onFocus={testChange}
                onBlur={testChange}
               
                />
                <h4 className={styles.sendButton} onClick={onSearch} > <SearchIcon style={{fontSize: '20px', color: '#1877F2'}}/></h4>
            </div>           
            <div  className={styles.services}>
                {!(feature.length === 0) ? 
                <div className={styles.questionContainer}>
                    {feature.map((data,index)=>{
                        return (
                            <Link href={`/info/article/${data.id}`} key={data.title}>
                                <button className={styles.question} key={index} onClick={toggle}>
                                        {data.title}
                                    </button>
                            </Link>
                        )
                    })}
                    {online && 
                        <button className={styles.question} onClick={handleStart}>
                            <ContactSupportIcon/> Talk to Customer Service
                        </button>
                    }
                    
                </div>
                :
                <div className={styles.questionContainer}>
                    {load 
                    ?
                     <CircularProgress style={{color: '#C51111'}} /> 
                    : 
                        <>
                        <h5 className={styles.nothing}>Nothing Found</h5>
                        {online && 
                            <button className={styles.question} onClick={handleStart}>
                                <ContactSupportIcon/> Talk to Customer Service
                            </button>
                        }
                        </>
                    }
                </div>
                }

                
            </div>   
              
        </div>



        <div className={open ? styles.closeFloatButton : styles.floatButton} onClick={toggle}>
            Need Help?
        </div>


       
    </div>
  )
}
