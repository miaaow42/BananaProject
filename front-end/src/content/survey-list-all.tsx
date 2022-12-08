import React from "react";
import { Link } from "react-router-dom";

function SurveyListAll()
{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="cardcorner" className="p-4 mb-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-1 fw-bold welcome">WELCOME TO </h1>
                            <h1 className="display-1 fw-bold pinkBanana">Pink Banana</h1>
                            <p className="col-md-8 fs-4">Making the survey <i>easier</i> is our <strong>target</strong>.
                                <strong>Make</strong> your own survey <i>now</i>.</p>
                                <Link to={"/add-survey"}>
                                    <button className="btn btn-dark"> Create a Survey</button>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-none d-lg-block">
                       </div>
                </div>
            </div>
        </div>
    )
}

export default SurveyListAll;