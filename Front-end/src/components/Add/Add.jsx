import './Add.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import dune3 from '../../assets/dune3.jpg'

function Add() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [movie, setMovie] = useState("")
    const [actor, setActor] = useState("")
    const [img, setImg] = useState("")
    const [user,setUser] = useState("randomUser")

    useEffect(()=> {
        setUser(sessionStorage.getItem("user"))
    },[user])

    function handleClick(event) {
        event.preventDefault()
        if (name != "" &&
            movie != "" &&
            actor != "" &&
            img != "") {
            passData()
            navigate("/list")
        }
    }

    function passData() {
        try {
            console.log("user",user)
            axios.post("https://movies-with-best-antagonists-1.onrender.com/newEntity", {
                "srNo": 55,
                "antagonist": name,
                "movie": movie,
                "portrayed_by": actor,
                "imageLinks": img,
                "createdBy" : user
            })
            .then(response => console.log(response))
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <div className="background">
                <div className="blackBG">

                    <img src={dune3} alt="" className='duneBGIMG'/>
                </div>
                <div className="imgCenter">
                </div>
            </div>
            <div className="center-ae">
                <div className="blackReel">
                    <div className="left">
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                    </div>

                    <div className="formArea">
                        <div className="formHeading">
                            NEW ANTAGONIST
                        </div>

                        <form>
                            <div className="formPart">
                                <label htmlFor="antagonistName" className='font'>Antagonist Name</label>
                                <input onChange={() => { setName(event.target.value) }} type="text" className='font' />
                            </div>
                            <div className="formPart">
                                <label htmlFor="movie" className='font'>Movie</label>
                                <input onChange={() => { setMovie(event.target.value) }} type="text" className='font' />
                            </div>
                            <div className="formPart">
                                <label htmlFor="portrayed_by" className='font'>Portrayed By</label>
                                <input onChange={() => { setActor(event.target.value) }} type="text" className='font' />
                            </div>
                            <div className="formPart">
                                <label htmlFor="imageLink" className='font'>Image Link</label>
                                <input onChange={() => { setImg(event.target.value) }} type="text" className='font' />
                            </div>

                            <button className='formSubmit font' onClick={handleClick}>
                                ADD ENTITY
                            </button>
                        </form>
                    </div>

                    <div className="left">
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                        <div className="whiteSpot"></div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Add