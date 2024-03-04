import './List.css'
import PinImg from '../assets/pin.png'

function Tile({ antagonist, imageLinks, movie, portrayedBy, srNo }) {
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
                        Portrayed By: {portrayedBy}
                    </div>
                </div>

                <div className="rankBox">
                    {srNo}
                </div>
                <img src={PinImg} className='pin' alt="Pin Image" />
            </div>
        </div>
    )
}

export default Tile