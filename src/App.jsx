import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="main-container">
        <ContactHeader />
        <ContactForm />
      </main>
    
    </>
  )
}

export default App
