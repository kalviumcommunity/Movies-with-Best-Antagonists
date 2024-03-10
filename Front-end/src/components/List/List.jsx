import './List.css'

import SearchImg from '../../assets/search.png'
import Logo from '../../assets/logo.png'

import Tile from './Tile'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function List() {

    const [data, setData] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://movies-with-best-antagonists-1.onrender.com/list")
                console.log(res)
                setData(res.data)
            }
            catch (err) {
                console.log("Unable to get data from DB - ", err)
            }
        }
        getData()
    }, [data])

    useEffect(() => {
        console.log("dataFromDB", data)
    }, [data])

    

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
                            <Link to="/login">
                                <div className="login">
                                    Login
                                </div>
                            </Link>
                            <Link to="/signup">
                                <div className="login">
                                    SignUp
                                </div>
                            </Link>
                        </div>
                    </nav>
                    <div className="nav2">

                    </div>
                </div>

                <div className="listArea">
                    {data.map((el,index) => {
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