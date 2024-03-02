import './Home.css'
import { Link } from 'react-router-dom'
import starWarsImg from '../assets/Pulp Fiction x Star Wars.jpg'
import LogoImg from '../assets/logo.png'

function Home() {
    return (
        <>
            <div className="homePage">
                <img className='bgImg' src={starWarsImg} alt="Star Wars Pulp Fiction BG Img" />
            </div>

            <div className="main">
                <div className="centerArea">
                    <img src={LogoImg} alt="Logo Img" className='homePageLogo' />

                    <div className="shift">

                        <h1 className='heading'>A LIST OF BEST ANTAGONISTS</h1>
                        <div className="buttonArea">
                            <Link to='/list'>
                                <div className="nextButton">
                                    CLICK HERE!
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home