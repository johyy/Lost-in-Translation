import { NavLink, useLocation } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {

    const { user } = useUser()
    const location = useLocation()

    return (
        <nav>
            <ul>
                <li><img src="img/logo.png" alt="Logo" className="navlogo"/></li>
                <li>Lost in Translation</li>
            </ul>
            { user !== null &&
            <ul>
                <li> 
                    {       
                            !location.pathname.includes("/translation") ?         
                            <NavLink to="translation">Translation</NavLink> :  
                            <span className="selected">Translation</span>    
                    }
                </li>
                <li>
                    { 
                            !location.pathname.includes("/profile") ?           
                            <NavLink to="profile">Profile</NavLink> :      
                            <span className="selected">Profile</span>       
                    }
                </li>
            </ul>
            }
        </nav>
    )
}

export default Navbar