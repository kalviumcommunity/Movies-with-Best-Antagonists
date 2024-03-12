import LogoImg from '../../assets/logo3.png'
import Voldemort from '../../assets/vol.png'
import './AboutUs.css'
import { Link } from 'react-router-dom'
import Dune from '../../assets/dune5.png'

function AboutUs() {
    return (
        <>
            <div className="background">
                <div className="blackBG">
                    <img src={Dune} alt="" className='duneBGIMG' /></div>
                <div className="imgCenter">
                </div>
            </div>

<Link to="/list">
                <img src={LogoImg} alt="" className='abt'/>
</Link>

            <div className='aboutUs'>

                <div className="page">
                    <h1 className='font'>ABOUT US</h1>

                    <p className='font'>Welcome to Antagonist Archive, where the lines between heroes and villains blur, and the most iconic adversaries claim their rankings. Dive into the captivating narratives of notorious characters across universes. As we explore the allure of villainy, remember: in this archive, you either die a hero or live long enough to see yourself become the villain. Join us on Antagonist Archive for a deep dive into the intriguing world of iconic antagonists.
                    </p>
                </div>

        </div >
        </>
    )
}

export default AboutUs