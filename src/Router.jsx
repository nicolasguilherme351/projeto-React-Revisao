import { Route, Routes } from "react-router-dom"
import { Título } from "./pages/Título"




function Router()  {

  return (
      <Routes>
        <Route path="/" element={Título(1)} />
      </Routes>
  
  )
}

export { Router }
