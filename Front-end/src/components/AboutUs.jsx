import LogoImg from '../assets/logo.png'
import Voldemort from '../assets/vol.png'
import './AboutUs.css'
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <>
            <div className="back">
            </div>

            <Link to='/'>
                <img src={LogoImg} alt="" className='logoAboutUs' />
            </Link>

            <img src={Voldemort} alt="" className='vol' />

            <div className="text">

                <h1 className='aboutUsHead'>ABOUT US</h1>

                Welcome to Antagonist Archive, where the lines between heroes and villains blur, and the most iconic adversaries claim their rankings. Dive into the captivating narratives of notorious characters across universes. As we explore the allure of villainy, remember: in this archive, you either die a hero or live long enough to see yourself become the villain. Join us on Antagonist Archive for a deep dive into the intriguing world of iconic antagonists.
            </div>
        </>
    )
}

export default AboutUs