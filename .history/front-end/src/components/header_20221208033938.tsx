import React from "react";
import {NavLink} from 'react-router-dom';

function Header()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark navbar fixed-top x-navbar">
            <NavLink className="navbar-brand" to="/"> <img src="/images/groupProjectLogo.png" alt="Logo" width="60px"/> </NavLink>
            <div className="container-fluid" >

                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon "></span>
                 </button>

                 <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink  to={"/home"} className="nav-item" >Survey List</NavLink>
                        </li>
                    </ul>
                 </div>
            </div>
        </nav>
    )
}

export default Header;