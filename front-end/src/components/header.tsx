import React from "react";
import {NavLink} from 'react-router-dom';

function Header()
{
    return(
        // <nav classNameName="navbar navbar-expand-lg navbar-dark navbar fixed-top x-navbar">
        //     <NavLink classNameName="navbar-brand" to="/"> <img src="/images/groupProjectLogo.png" alt="Logo" width="60px"/> PinkBanana Survey</NavLink>
        //     <div classNameName="container-fluid" >

        //          <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        //             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //              <span classNameName="navbar-toggler-icon "></span>
        //          </button>

        //          <div classNameName="collapse navbar-collapse" id="navbarSupportedContent" >
        //             <ul classNameName="navbar-nav ms-auto mb-2 mb-lg-0">
        //                 <li classNameName="nav-item">
        //                     <NavLink  to={"/home"} classNameName="nav-item" >Survey List</NavLink>
        //                 </li>
        //             </ul>
        //          </div>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/"}>PinkBanana Survey</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>Survey List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;