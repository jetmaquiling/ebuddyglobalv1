import * as React from "react"
import * as style from "@/styles/navigation/cookie.module.css"
import Link from 'next/link'
import CloseIcon from '@material-ui/icons/Close';



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




const Cookie = ({allowed ,setAllowed}) => {

    
    function checkCookie() {
        let cookie = getCookie("cookie_authorized")
        console.log("cookie",cookie)
        if(cookie == "USER_ACCEPTED"){
            setAllowed(true)
            
        }else{
            setAllowed(false)
        }
    }

    React.useEffect(() => {
        checkCookie()
    }, [])

    function acceptCookie() {
        setCookie("cookie_authorized", "USER_ACCEPTED", 3)
        setAllowed(true)
    }

  return (
    <div className={style.main}>
        <div className={style.off} >
            <h6 className={style.cookieText}>globalebuddy.com uses cookies to give you a better navigation experience on our site. As soon as you continue the tour, we assume you accept the cookies policy. Learn more about the cookie policy we use here.</h6>
            <h6 className={style.cookieButton} onClick={acceptCookie}>
                I ACCEPT
            </h6>
            <CloseIcon style={{color:"#fff", fontSize: '30px', cursor: "pointer"}} onClick={()=>{setAllowed(true)}}/>
        </div>
    </div>
  )
}

export default Cookie
