import dune from '../../assets/dune2.jpg'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import close from '../../assets/close.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [allUserData, setAllUserData] = useState([])
    const [dataCorrect, setDataCorrect] = useState(false)

    const [userFound, setUserFound] = useState(false)

    const [alerts, setAlerts] = useState({
        username: "",
        password: ""
    })

    function handleAlerts() {
        const newAlerts = {}

        if (username == "") {
            newAlerts.username = "Please enter your username"
        }
        else {
            newAlerts.username = ""
        }
        if (password == "") {
            newAlerts.password = "Please enter your password"
        }
        else {
            newAlerts.password = ""
        }

        if (username != "" && password != "") {
            return true
        }
        setAlerts(newAlerts)
        return false
    }

    async function handleClick() {
        const isCorrect = handleAlerts()

        if (isCorrect) {
            try {
                const response = await axios.post("https://movies-with-best-antagonists-1.onrender.com/login", {
                    "username": username,
                    "password": password
                })
                if (response.status === 200) {
                    setDataCorrect(true)
                    document.cookie = "username=" + username + "; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/"
                    document.cookie = "password=" + password + "; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/"
                    sessionStorage.setItem("showLOGIN", false)
                    sessionStorage.setItem("user", username)
                    setUserFound(true)
                    try {
                        const access = axios.post("https://movies-with-best-antagonists-1.onrender.com/auth", {
                            "username": username,
                            "password": password
                        })
                            .then(access => {
                                console.log(access)
                                document.cookie = "ACCESS_TOKEN=" + access.data.acsessToken + "; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/"
                            })

                    }
                    catch (err) {
                        console.log(err)
                    }
                    navigate('/list')
                }
            }
            catch (err) {


                alert("inavlid username or password")
            }

        }

    }

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
                        <div className="red">{alerts.username}</div>
                    </div>
                    <div className="flex-r">
                        <label htmlFor="name" className='loginText labels'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className='' placeholder='Chani' />
                        <div className="red">{alerts.password}</div>
                    </div>

                    <button className='loginText' onClick={handleClick}>
                        LOGIN
                    </button>

                    <h3 className='loginText'>Not a User? <Link to="/signup"><span>SIGNUP</span></Link></h3>
                </div>
            </div>
        </>
    )
}

export default Login