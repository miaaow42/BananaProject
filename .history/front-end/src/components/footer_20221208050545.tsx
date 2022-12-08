import React from "react";


// Footer Component
function Footer()
{
    function getDate(): number
    {
        let date = new Date();
        return date.getDate();
    }
    function getDate2(): number
    {
        let date = new Date();
        return date.getMonth() + 1;
    }
    function getDate3(): number
    {
        let date = new Date();
        return date.getUTCDate();
    }

    return(
        <nav className="navbar fixed-bottom bg-light">
        <div className="container-fluid">
          <h6 >&copy;Copyright 2022 {getDate2()} {getDate()} {getDate3()}. Pink Banana Survey All Rights Reserved. </h6>
        </div>
      </nav>
    )
}

export default Footer;