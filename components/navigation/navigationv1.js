import * as React from "react"
import * as style from "@/styles/navigation/navigationv1.module.css"
import Link from 'next/link'
import CloseIcon from '@material-ui/icons/Close';



const NavigationV1 = ({pos,open, setOpen}) => {
  
  return (
    <div className={open  ? style.off : style.main}>

        <div className={style.navbar}>
          <div className={style.navbar1}>
              <div className={style.tinylogoToken}>
                <img src={'/Logo/EbuddyLogo.png'} alt="Logo"  className={style.logoToken}/>
              </div>
          </div>
          <div className={style.midnav}>
            <div   id="google_translate_element2" ></div>
          </div>
          <div className={style.navbar3} onClick={()=>{setOpen(!open)}}>      
               <CloseIcon style={{color:"#fff", fontSize: '40px'}}/>
          </div>
          
          
        </div>

        <div className={style.navbar2}>

              
              <div  className={style.specialbuttonBox}>
                <Link href="https://beta.phb2020.com/register"><h4 className={style.specialh4animate}>Create Account</h4></Link>
              </div>

              <div  className={style.specialbuttonBox}>
                <Link href="https://beta.phb2020.com/login"><h4 className={style.specialh4animate}>Log in</h4></Link>
              </div>
              
              <div  className={style.buttonBox}>
                <Link href="/info/about"><h4 className={style.h4animate}>About us</h4></Link>
              </div>
  
              <div  className={style.buttonBox}>
                <Link href="/info/plan"><h4 className={style.h4animate}>Business Plan</h4></Link>
              </div>

              <div  className={style.buttonBox}>
                <Link href="https://ebuddy.ph/"><h4 className={style.h4animate}>ebuddy.ph</h4></Link>
              </div>
              
              <div  className={style.buttonBox}>
                <Link href="/info/community"><h4 className={style.h4animate}>Community</h4></Link>
              </div>

              <div  className={style.buttonBox}>
                <Link href="/info/products"><h4 className={style.h4animate}>Products</h4></Link>
              </div>

              <div  className={style.buttonBox}>
                <Link href="/info/products"><h4 className={style.h4animate}>Tools/Resource</h4></Link>
              </div>

              
            
              



        </div>
        <div className={style.rightsBox}>
                    <p className={style.rightsText}>2021 © PHBWORX.COM | All rights reserved</p>
        </div>

        
    </div>
    
  )
}

export default NavigationV1
