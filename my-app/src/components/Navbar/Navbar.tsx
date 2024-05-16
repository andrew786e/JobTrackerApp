import { navBarList } from "./navbarItems"
import "./Navbar.css"
export default function  Navbar(){
    const navBarItems : JSX.Element[] = navBarList.map(element => {
        return (
            <li>{element.name}</li>
        )
    });

    return(
        <>
        <div className="navbar-container">
            <div className="navbar-header">FindOne</div>
            <ul className="navbar-navigation">{navBarItems}</ul>
        </div>
        </>
    )
}