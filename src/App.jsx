import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import PhotoGallery from "./pages/PhotoGallery"


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Navigate replace to='/home'/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/gallery" element={<PhotoGallery/>}/>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App