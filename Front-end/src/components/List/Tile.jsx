import './List.css'
import PinImg from '../../assets/pin.png'

// This is the component that will get the entity and show the data to the user.

function Tile({ antagonist, imageLinks, movie, portrayed_by, srNo,count,_id}) {
    // console.log("key",key)
    return (
        <div className='align'>
            <div className="item">
                <img src={imageLinks} alt="Antagonist Image" className='charImg' />

                <div className="name">
                    {antagonist.toUpperCase()}
                </div>

                <div className="details">
                    <div className='desc'>
                        Movie: {movie}
                    </div>
                    <div className='desc'>
                        Portrayed By: {portrayed_by}
                    </div>
                </div>

                <div className="actions">
                    <Link to={`/update/${_id}`}>
                        <div className="update">
                            UPDATE
                        </div>
                    </Link>
                    <div className="delete">
                        DELETE
                    </div>
                </div>

                <div className="rankBox">
                    {count+1}
                </div>
                <img src={PinImg} className='pin' alt="Pin Image" />
            </div>
        </div>
    )
}

export default Tile