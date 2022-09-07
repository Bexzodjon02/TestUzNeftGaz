import React, {useState} from 'react'
import "./user.css"
import userLodo from "./loginUser.png";

import {useNavigate} from "react-router-dom"

export default function() {
    const navigation = useNavigate()
    const[login, setLogin]= useState('')
    const[parol, setParol]= useState('')
    function CkeckPass() {
        if(login == "admin" && parol == "000000"){
            localStorage.setItem("keyAuth", login)
            // localStorage.setItem("key", parol)
            navigation("/")
        }else{
            navigation("/error")    
            // alert("Login yoki Parol xato 😭😭😭😭😭")  
        }
    }
    return (
        <div className=' '>
            <div className=' loginPage' >
                    <div className='Logincard '>
                        <img className='imgParol' width="150px" src={userLodo}></img>
                        <input onChange={(val)=>setLogin(val.target.value)} className="loginInput" type="login" placeholder="Parolingizni kiritng"/>
                        
                        <input onChange={(val)=>setParol(val.target.value)} className="loginInput" type="password" placeholder="Parolingizni kiritng"/> <br/>
                        <button onClick={()=>CkeckPass()} className='btn1 '>Kirish</button>
                    </div>
            </div>
           
        </div>
    )
}
