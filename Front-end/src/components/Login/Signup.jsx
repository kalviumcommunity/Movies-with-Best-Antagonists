import dune from '../../assets/dune.jpeg'
import './Login.css'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import close from '../../assets/close.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const navigate = useNavigate()

    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [cPassword,setCPassword] = useState("")

    const [loginCorrect,setLoginCorrect] = useState(false)

    const [alerts,setAlert] = useState({
        name : "",
        username : "",
        password : "",
        cPassword : ""
    })

    function handleAlerts(){
        const newAlerts = {}

        if(name == ""){
            newAlerts.name = "Please enter your Name"
        }
        else{
            newAlerts.name = ""
        }
        if(username == ""){
            newAlerts.username = "Please Enter your Username"
        }
        else{
            newAlerts.username = ""
        }
        if(password == ""){
            newAlerts.password = "Please Enter your Password"
        }
        else{
            newAlerts.password = ""
        }
        if(cPassword == ""){
            newAlerts.cPassword = "Please Enter your Password Again"
        }
        else if(cPassword != password){
            newAlerts.cPassword = "Password must match!"
        }
        else{
            newAlerts.cPassword = ""
        }

        if(newAlerts.name == "" &&
           newAlerts.username == "" &&
           newAlerts.password == "" &&
           newAlerts.cPassword == ""){
            console.log("login succesful mate")
            return true
           }

        setAlert(newAlerts)
        return false
    }

    function handleSubmit(){
        const isDone = handleAlerts()


        if(isDone){

            document.cookie = "name="+ name +"; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/"
            document.cookie = "username="+ username +"; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/"
            document.cookie = "password="+ password +"; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/"
            document.cookie = "confirmPassword="+ cPassword +"; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/"
            console.log(alerts.name)
        
            try{
                axios.post("https://movies-with-best-antagonists-1.onrender.com/newUser",{
                    "name" : name,
                    "username" : username,
                    "password" : password,
                    "cPassword" : cPassword
                })
                .then(response => {
                    console.log(response)
                    sessionStorage.setItem("user",username)
                })
                .then(navigate('/list'))
            }
            catch(err){
                console.log(err)
            }
        }
    }
    
    useEffect(()=> {

    },[loginCorrect])

    return (
        <>
            <div className="background">
                <div className="blackBG another"></div>
                <div className="imgCenter">
                </div>
            </div>
            <div className="flex">
                
                <div className="signupRight">
            <Link to='/list'>
                <img src={close} className='close-su' alt="" />
            </Link>
                    <h1 className='loginText'>SIGNUP PAGE</h1>

                    <div className="flex-r">
                        <label htmlFor="name" className='loginText labels'>Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className='' placeholder="Paul Atreides" />
                        <div className="red">{alerts.name}</div>
                    </div>
                    <div className="flex-r">
                        <label htmlFor="name" className='loginText labels'>Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" className='' placeholder="Lisan al'Gaib" />
                        <div className="red">{alerts.username}</div>
                    </div>
                    <div className="flex-r">
                        <label htmlFor="name" className='loginText labels'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className='' placeholder='Chani' />
                        <div className="red">{alerts.password}</div>
                    </div>
                    <div className="flex-r">
                        <label htmlFor="name" className='loginText labels'>Confirm Password</label>
                        <input onChange={(e) => setCPassword(e.target.value)} type="password" className='' placeholder='Irulan?' />
                        <div className="red">{alerts.cPassword}</div>
                    </div>

                    <button className='loginText' onClick={handleSubmit}>
                        SIGNUP
                    </button>

                    <h3 className='loginText'>Already a User? <Link to="/login"><span>LOGIN</span></Link></h3>
                </div>
                {/* <div className="loginLeft"> */}
                    <img src={dune} alt="bgImgSignUp" className='duneBGSU' />
                {/* </div> */}
            </div>
        </>
    )
}

export default Signup