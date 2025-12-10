import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Particles from "./Components/Particles/Particles"
import "./App.css"

export default function App() {
    return (
        <div className='app'>
            <section className='hero'>
                <Particles />
                <Header />
                <Hero />
            </section>
        </div>
    )
}
