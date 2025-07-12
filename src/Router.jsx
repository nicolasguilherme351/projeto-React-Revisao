import { Route, Routes } from "react-router-dom"
import { Titulo, Titulo2 } from "./pages"


function Router()  {

  return (
      <Routes>
        <Route path="/" element={Titulo(1)} />
        <Route path="/titulo2" element={Titulo2()} />
      </Routes>
  
  )
}

export { Router }
