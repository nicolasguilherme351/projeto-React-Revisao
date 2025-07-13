import { Link, Outlet } from "react-router-dom"

const PaginaNavegacao = () => {


    return (
        <div>
            <Link to="/kk"><h1>CARA</h1></Link>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export { PaginaNavegacao }