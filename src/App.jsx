import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Donation from "./pages/Donation"
import Navbar from "./components/Navbar"
import Gallary from "./pages/Gallary"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route index element={<Navigate replace to='/home'/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/gallery" element={<Gallary/>}/>
        <Route path="/Donation" element={<Donation/>}/>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App