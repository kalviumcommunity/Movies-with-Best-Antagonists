import './List.css'

import SearchImg from '../../assets/search.png'
import Logo from '../../assets/logo.png'

import Tile from './Tile'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function List() {

    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])
    const [filteredData,setFilteredData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://movies-with-best-antagonists-1.onrender.com/list")
                const uD = await axios.get("https://movies-with-best-antagonists-1.onrender.com/users")
                setUserData(uD.data)
                setData(res.data)
            }
            catch (err) {
                console.log("Unable to get data from DB - ", err)
            }
        }
        getData()
    }, [data])

    const [isLoggedIn, setisLoggedIn] = useState(true)

    useEffect(() => {
        setisLoggedIn(sessionStorage.getItem("showLOGIN"))
    }, [data])

    function handleLogout() {
        alert("Logged out succesfully!")
        sessionStorage.clear()
        deleteCookies()
        console.log("cookies", document.cookie)
    }

    function deleteCookies() {
        var allCookies = document.cookie.split(';');
        for (var i = 0; i < allCookies.length; i++)
            document.cookie = allCookies[i] + "=;expires="
                + new Date(0).toUTCString();

        displayCookies.innerHTML = document.cookie;

    }

    function handleOptionChange(e){
        const selectedUser = e.target.value

        if(selectedUser == "All"){
            setFilteredData(data)
        }
        else{
            const few = data.filter(el => {
            if(el.createdBy == selectedUser){
                return el
            }
        })
        
        setFilteredData(few)
    }
    }

    return (
        <>
            <div className="background">
                <div className="blackBG"></div>
                <div className="imgCenter">
                </div>
            </div>
            <div className='center'>
                <div className="black">
                    <nav>
                        <div>
                            <Link to='/'>
                                <img src={Logo} alt="Antagonist Archive Logo" className='logoImg' />
                            </Link>
                        </div>
                        {/* <div className="search">
                            <input className="searchBox" placeholder='Search here' />
                            <div className="searchButton">
                                <img src={SearchImg} alt="Search Icon" className='searchImg' />
                            </div>
                        </div> */}
                        <div className='end'>
                            <Link to='/AboutUs'>
                                <div className="login">ABOUT US</div>
                            </Link>
                            <Link to='/AddEntity'>
                                <div className="login">
                                    ADD ENTITY
                                </div>
                            </Link>

                            {!isLoggedIn && <Link to="/login">
                                <div className="login">
                                    Login
                                </div>
                            </Link>

                            }

                            {!isLoggedIn && <Link to="/signup">
                                <div className="login">
                                    SignUp
                                </div>
                            </Link>}

                            {isLoggedIn && <div className="login pointer" onClick={handleLogout}>
                                LOGOUT
                            </div>}

                        </div>
                    </nav>
                    <div className="nav2">

                    </div>
                </div>

                <select name="userName" onChange={(e) => handleOptionChange(e)}>
                    <option value="All">All</option>
                    {userData && userData.map(el => {
                        return <option value={el.username}>{el.username}</option>
                    })}
                </select>

                <div className="listArea">
                    {filteredData && filteredData.map((el, index) => {
                        return (
                            <Tile {...el} count={index} />
                        )
                    })}
                    <div className="placeholder"></div>

                    <div className="placeholder"></div>

                </div>
            </div>

        </>
    )
}

export default List