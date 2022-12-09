import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth-service";

function Logout()
{
    useEffect(()=>{
        AuthService.logout();
    })
    return(
        <Navigate to={"/login"}/>
    );
}

export default Logout;