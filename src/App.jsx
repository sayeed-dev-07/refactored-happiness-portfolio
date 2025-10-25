
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


function App() {


  return (
    <>
      <div className="wrapper w-full bg-[#040d12] min-h-screen px-4 md:px-[5%] lg:px-[10%] xl:px-[15%]">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
