import { Route, Routes } from "react-router-dom"
import { PaginaNavegacao, Título, Título2 } from "./pages"



function Router() {

  return (
      <Routes>
                    <Route path="/" element={<PaginaNavegacao />}>
                                <Route path="/kk" element={<Título />} />

          <Route path="/" element={<Título2 />} />
            </Route>

        
      </Routes>
  
  )
}

export { Router }
