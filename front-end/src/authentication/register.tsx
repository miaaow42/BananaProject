import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";    
import AuthService from "../services/auth-service";
import UserModel from "../models/User";


function Register()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const navigate = useNavigate(); // alias for useNavigate

    function OnChangeUsername(event: ChangeEvent<HTMLInputElement>)
    {
        setUsername(event.target.value);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>)
    {
        setPassword(event.target.value);
    }
    function OnChangeFirstName(event: ChangeEvent<HTMLInputElement>)
    {
        setFirstName(event.target.value);
    }

    function onChangeLastName(event: ChangeEvent<HTMLInputElement>)
    {
        setLastName(event.target.value);
    }

    function handleRegister(event: any)
    {
        event.preventDefault();

        // construct some user object(data) (AKA Instantiate an object of type User Model)
        const UserData: UserModel = {
            username: username,
            password: password,
            FirstName: FirstName,
            LastName: LastName,
        }
        // user the auth service to perform login
        AuthService.register(UserData.username, UserData.password, UserData.FirstName,UserData.LastName)
        .then(()=>{
            // navigate to the survey list page
            navigate("/login") // just like res.redirect...
        }, error=>{
            // flashing Messaging
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
    
                                <form onSubmit={handleRegister}  id="registerForm">
                                    <div className="form-group mt-4">
                                        <div className="row">
                                            <span className="d-none d-md-inline text-white"><p className="lead"><i className="fas fa-user-shield"></i> System Identification</p></span>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6 mb-2">
                                                            <input className="form-control" type="text" name="firstName" id="firstName" placeholder="First Name" 
                                                            value={FirstName}
                                                            onChange = {OnChangeFirstName} 
                                                            required />
                                                        </div>
                                                        <div className="col-md-6 mb-2">
                                                            <input className="form-control" type="text" name="lastName" id="lastName" placeholder="Last Name" 
                                                            value={LastName}
                                                            onChange = {onChangeLastName}
                                                            required />
                                                        </div>
                                                    </div>
                                                </div>

                                                        <div className="form-group">
                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <input type="text" className="form-control" id="username" name="username"
                                                                    value={username}
                                                                    onChange = {OnChangeUsername}  
                                                                    required
                                                                     placeholder="Username" />   
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-2">
                                                                        <input type="password" className="form-control" id="password" name="password"  
                                                                        value={password}
                                                                        onChange = {onChangePassword}
                                                                        required
                                                                           placeholder="Password" />   
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="form-group mb-2">
                                                                <div className="row">
                                                                    <div className="col-md-12 mb-2">
                                                                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"
                                                                        value={password}
                                                                        onChange = {onChangePassword}  
                                                                        required
                                                                            placeholder="Confirm Password" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="text-right">
                                                                <button id="submitButton" type="submit" className="btn btn-primary btn-lg"><i className="fas fa-user-plus"></i> Register</button>
                                                                    <Link to={"/"} id="cancelButton" className="btn btn-warning btn-lg"><i className="fas fa-undo-alt"></i><span className="d-none d-md-inline"> Cancel</span></Link>
                                                            </div>
                                                        </div>
                                         </div>
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

export default Register;