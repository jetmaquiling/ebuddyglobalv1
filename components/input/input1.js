/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import ReplayIcon from '@material-ui/icons/Replay';
import Typography from '@material-ui/core/Typography';
import style from '@/styles/formsection/form.module.css'
import axios from 'axios';
import config from "@/config/configuration.json"
import LinearProgress from '@material-ui/core/LinearProgress';


export default function Input1({placeholder="", code_id="" , label='Undefined', field='Undefined',code='' , type="none", dispatch , picture=null, preview=null }) {
    const [ load , setLoad] = React.useState(false);

    const onChange = (field,e) => {
        dispatch({
            type:"ONCHANGE",
            field: field,
            payload: e
        })
    }



    const uploadimage = async (e) =>{
        setLoad(true)
        const formData = new FormData()
        formData.append('files', e.target.files[0]);
        const output = await axios.post(`${config.SERVER_URL}/upload/`, formData)
        if(output.status === 200){
            onChange(code, output.data[0].id)
            onChange(field, output.data[0].url)
            setLoad(false)
        }else{
            alert("Error, please contact CSR for help.",output.status)
            setLoad(false)
        }
        
    }

    const deleteImage = async () =>{
        setLoad(true)
        const output = await axios.delete(`${config.SERVER_URL}/upload/files/${code_id}`)
        if(output.status === 200){
            onChange(code, null)
            onChange(field, null)
        }
        setLoad(false)
    }


    return (
        <div >
            <div>
                    <h2 className={style.label}>{label}
                   
                        {
                        picture ?
                        
                        <IconButton onClick={()=>deleteImage()}>
                            <ReplayIcon style={{fontSize:'25px'}} />
                        </IconButton> :
                        <h5 className={style.placeholder}>{placeholder}</h5>
                     
                        }
                
                    
                    </h2>

                    {load && <LinearProgress style={{width: "70%"}} color="secondary" />}
                    {!load && 
                        !picture && 
                            <input
                            accept="image/*"
                            className={style.input} 
                            type="file"
                            multiple={ false }
                            onChange={(e) => uploadimage(e)}
                            />
                    }
                    
                    
            </div>
            {!load && 
                <div  style={{display: (picture? 'block' : 'none')}} className={style.imageBox}>  
                    <img className={style.imagePreview} src={picture} />
                </div>
            }
            
            
            
        </div>
        
    )
}
