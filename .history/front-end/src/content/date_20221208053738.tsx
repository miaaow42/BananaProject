import React from "react";

function Date()
{
    return(
        <div className="flex-wrapper ">
            <div className="container">
                 <div className="row d-flex justify-content-center align-items-center h-100">
                    <h1></h1> 
    
                    <form method="POST" className="col-lg-6 col-md-10 col-sm-10" />
                        <div className="progress progress-bar progress-bar-striped " role="progressbar"  aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">66%</div>
                    <div className="form-group">
                        <label htmlFor="startDate">Start date:</label>
                        <input type="date" id="startDate" name="startDate">
                        <label htmlFor="endDate">Expiration date:</label>
                        <input type="date" id="endDate" name="endDate">
                        <button type="submit" className="btn btn-primary"><i className="fas fa-arrow-right"></i> Next</button>
                    </div>
                    </form>
                    </div>
                    </div>
        </div>
        </div>
    )
}

export default Date;