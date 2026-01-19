import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./Header"
import { Footer } from "./Footer"
import { Content } from "./Content"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Service } from "./Service"
import { Contact } from "./Contact"
import { FaReact } from "react-icons/fa"
// import RippleLoader from "./components/lightswind/RippleLoader"
import FullScreenLoader from "./FullScreenLoader"
import PreLoader from "./FullScreenLoader"
import "./styles/custom.scss";


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // loader time (1.5 sec)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <PreLoader/>
  }

  return <MainApp />
}

function MainApp() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

/* 🔹 MAIN APP (NO ROUTER HERE) */



