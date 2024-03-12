import './List.css'
import PinImg from '../../assets/pin.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

import EditIcon from '../../assets/edit.png'
import EditIconGreen from '../../assets/edit2.png'

import DeleteIcon from '../../assets/delete.png'
import DeleteIconRed from '../../assets/delete2.png'

// This is the component that will get the entity and show the data to the user.

function Tile({ antagonist, imageLinks, movie, portrayed_by, srNo, count, _id }) {

    const handleDelete = (_id) => {
        console.log("hello", _id)
        axios.delete("https://movies-with-best-antagonists-1.onrender.com/delete/" + _id)
            .catch(err => console.log(err))
    }

    const [edit, setEdit] = useState(false)
    const [Delete, setDelete] = useState(false)

    function mouseEnterEdit() {
        setEdit(true)
    }

    function mouseLeaveEdit() {
        setEdit(false)
    }

    function mouseEnterDelete() {
        setDelete(true)
    }

    function mouseLeaveDelete() {
        setDelete(false)
    }

    return (
        <div className='align'>
            <div className="item">
                <img src={imageLinks} alt="Antagonist Image" className='charImg' />


                <div className="name">
                    {antagonist.toUpperCase()}
                    
                {/* <div className='iconPack'> */}
                        <Link to={`/update/${_id}`}>
                            <img src={edit ? EditIconGreen : EditIcon} className='icons' onMouseEnter={mouseEnterEdit} onMouseLeave={mouseLeaveEdit} />
                        </Link>
                        <img onClick={() => handleDelete(_id)} src={Delete ? DeleteIconRed : DeleteIcon} className='icons' onMouseEnter={mouseEnterDelete} onMouseLeave={mouseLeaveDelete} />
                    {/* </div> */}
                </div>

                <div className="details">
                    <div className='desc'>
                        Movie: {movie}
                    </div>
                    <div className='desc'>
                        Portrayed By: {portrayed_by}
                    </div>
                </div>



                <div className="rankBox">
                    {count + 1}
                </div>
                <img src={PinImg} className='pin' alt="Pin Image" />
            </div>
        </div>
    )
}

export default Tile