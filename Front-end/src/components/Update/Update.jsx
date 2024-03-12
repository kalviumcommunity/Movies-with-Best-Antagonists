// import './Add.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import dune3 from '../../assets/dune3.jpg'

function Update() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [currData, setCurrData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://movies-with-best-antagonists-1.onrender.com/list/` + id)
            console.log("INDIVIDUAL DATA", res.data)
            setCurrData(res.data)
            setName(res.data.antagonist)
            setMovie(res.data.movie)
            setActor(res.data.portrayed_by)
            setImg(res.data.imageLinks)
            setSrNo(res.data.srNo)
        }
        getData()
    }, [])

    const [name, setName] = useState(currData.antagonist)
    const [movie, setMovie] = useState(currData.movie)
    const [actor, setActor] = useState(currData.portrayed_by)
    const [img, setImg] = useState(currData.imageLinks)
    const [srNo, setSrNo] = useState(currData.srNo)
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
            axios.put("https://movies-with-best-antagonists-1.onrender.com/updateUser/" + id, {
                "srNo": srNo,
                "antagonist": name,
                "movie": movie,
                "portrayed_by": actor,
                "imageLinks": img,
                "createdBy" : user
            })
                .then(response => {
                    console.log(response)
                    navigate('/list')
                })
                .catch(err => console.log(err))
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <div className="background">
                <div className="blackBG">
                    <img src={dune3} alt="" className='duneBGIMG'/></div>
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
                            UPDATE ANTAGONIST
                        </div>

                        <form>
                            <div className="formPart">
                                <label htmlFor="antagonistName" className='font'>Antagonist Name</label>
                                <input value={name} onChange={() => { setName(event.target.value) }} type="text" className='font' />
                            </div>
                            <div className="formPart">
                                <label htmlFor="movie" className='font'>Movie</label>
                                <input value={movie} onChange={() => { setMovie(event.target.value) }} type="text" className='font' />
                            </div>
                            <div className="formPart">
                                <label htmlFor="portrayed_by" className='font'>Portrayed By</label>
                                <input value={actor} onChange={() => { setActor(event.target.value) }} type="text" className='font' />
                            </div>
                            <div className="formPart">
                                <label htmlFor="imageLink" className='font'>Image Link</label>
                                <input value={img} onChange={() => { setImg(event.target.value) }} type="text" className='font' />
                            </div>

                            <button className='formSubmit font' onClick={handleClick}>
                                UPDATE
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

export default Update