import React from "react";


// Footer Component
function Footer()
{
    function getDate(): number
    {
        let date = new Date();
        return date.getDate();
    }
    


    return(
        <nav className="navbar fixed-bottom bg-light">
        <div className="container-fluid">
          <h6 >&copy;Copyright 2022 {getDate()}. Pink Banana Survey All Rights Reserved. </h6>
        </div>
      </nav>
    )
}

export default Footer;