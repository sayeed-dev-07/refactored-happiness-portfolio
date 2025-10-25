
import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Border from './components/Border'
import Projects from './components/Projects'


function App() {


  return (
    <>
      <div className="wrapper w-full bg-[#white] min-h-screen">
        <Navbar />
        <Border />
        <Hero />
        <Border />
        <AboutMe />
        <Border />
        <Projects />
      </div>
    </>
  )
}

export default App
