import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthService from "../services/auth-service"; 
import UserModel from "../models/User";

function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // alias for useNavigate
    // useEffect(()=>{
    //     document.title = "Login";
    // });

    function OnChangeUsername(event: ChangeEvent<HTMLInputElement>)
    {
        setUsername(event.target.value);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>)
    {
        setPassword(event.target.value);
    }

    function handleLogin(event: any)
    {
        event.preventDefault();

        // construct some user object(data) (AKA Instantiate an object of type User Model)
        const UserData: UserModel = {
            username: username,
            password: password,
            FirstName: "",
            LastName: "",
        }
        // user the auth service to perform login
        AuthService.login(UserData.username, UserData.password)
        .then(()=>{
            // navigate to the survey list page
            navigate("/") // just like res.redirect...
        }, error=>{
            // flashing
            window.location.reload();
        }
        );
    }

    return(
        <section className="vh-100">
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card2 shadow-2-strong" >
                    <div className="card-body p-5 text-center">
                        <div className="row">

                            <h2 className="display-4 mb-4"><i className="fas fa-user-lock"></i> Sign In</h2>

                            <form onSubmit={handleLogin}  id="loginForm">

                                <div className="form-outline mb-4">
                                    <div className="input-group mb-1">
                                        <span className="input-group-addon">
                                        </span>
                                        <input type="text" className="form-control" id="username" name="username" required
                                            value = {username} 
                                            onChange={OnChangeUsername} placeholder="Enter username"/>
                                    </div>
                                </div>

                                <div className="form-outline mb-4">
                                    <div className="input-group mb-2">
                                        <span className="input-group-addon">
                                        </span>
                                        <input type="password" className="form-control" id="password" name="password"
                                            required 
                                            value= {password}
                                            onChange = {onChangePassword}
                                            placeholder="Enter password"/>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <button id="submitButton" type="submit" className="btn btn-primary btn-lg"> Sign In</button>
                                    <Link to={"/"} id="cancelButton" className="btn btn-warning btn-lg"><span className="d-none d-md-inline">
                                            Cancel</span></Link>
                                </div>
                            </form>
                            <hr className="my-4"/>
                            <p className="text-center text-muted small "/>
                                Do not have an account?
                                <Link to={"/register"}>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
}

export default Login;