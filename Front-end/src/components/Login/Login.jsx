import dune from '../../assets/dune2.jpg'
import './Login.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import close from '../../assets/close.png'

function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    return (
        <>
            <div className="background">
                <div className="blackBG another"></div>
                <div className="imgCenter">
                </div>
            </div>
            <Link to='/list'>
                <img src={close} className='close' alt="" />
            </Link>
            <div className="flex">
                <img src={dune} alt="bgImg" className='duneBG' />

                <div className="loginRight">
                    <h1 className='loginText'>LOGIN PAGE</h1>

                    <div className="flex-r">
                        <label htmlFor="name" className='loginText labels'>Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" className='' placeholder="Lisan al'Gaib" />
                    </div>
                    <div className="flex-r">
                        <label htmlFor="name" className='loginText labels'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className='' placeholder='Chani' />
                    </div>

                    <button className='loginText'>
                        LOGIN
                    </button>

                    <h3 className='loginText'>Not a User? <Link to="/signup"><span>SIGNUP</span></Link></h3>
                </div>
            </div>
        </>
    )
}

export default Login