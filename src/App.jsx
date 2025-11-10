import './App.css'
import NavBar from './components/Header/NavBar'
import HeroSection from './components/heroSection/HeroSection'
import MenuSection from './components/menuSection/MenuSection'
import MidText from './components/middletext/MidText'

function App() {
  return (
      <div className="h-screen w-full">
        {/* <NavBar /> */}
        <HeroSection />
        <MidText/>
        <MenuSection/>
      </div>
  )
}

export default App