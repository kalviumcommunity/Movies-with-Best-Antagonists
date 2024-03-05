import './List.css'

import SearchImg from '../assets/search.png'
import Logo from '../assets/logo.png'

import Tile from './Tile'
import data from '../sampleData.json'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function List() {

    function getData(){
        try{

            const response = axios.get("mongodb+srv://shaaaaz:mongo@angtagonists.stboc2h.mongodb.net/antagonists?retryWrites=true&w=majority&appName=angtagonists")
            .then(response => console.log(response))
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getData()
    },[])

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
                        <div className="search">
                            <input className="searchBox" placeholder='Search here' />
                            <div className="searchButton">
                                <img src={SearchImg} alt="Search Icon" className='searchImg' />
                            </div>
                        </div>
                        <Link to='/AboutUs'>
                            <div className="aboutUs">ABOUT US</div>
                        </Link>
                    </nav>
                    <div className="nav2">

                    </div>
                </div>

                <div className="listArea">
                    {/* {setNewData(shuffleArray(data))} */}
                    {data.map(el => {
                        return (
                            <Tile key={el.srNo} {...el} />
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