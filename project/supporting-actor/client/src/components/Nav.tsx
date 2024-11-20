import { NavLink } from "react-router-dom";

export default function  Nav() {

    const routes = [
        "Movies",
        "Series",
        "Animations"
    ]

    return (
        <nav>
            <ul className="flex justify-start 600 gap-10">
                {routes.map(route => <NavLink to={route.toLowerCase()}>{route}</NavLink>)}
            </ul>
        </nav>
    )
    
}