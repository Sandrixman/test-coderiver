import RevealText from "../RevealText/RevealText"
import Arrow from "../../assets/arrow.svg"
import "./Hero.css"

export default function Hero() {
    return (
        <div className='hero-content'>
            <button className='slant-btn'>START TODAY!</button>

            <h1 className='hero-title'>
                <RevealText delay={500}>Building the future of</RevealText>
                <br />
                <RevealText delay={800}>medicine with AI</RevealText>
            </h1>

            <div className='hero-arrow'>
                <img src={Arrow} alt='Scroll down' />
            </div>
        </div>
    )
}
