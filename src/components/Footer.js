import React from "react";

const Footer = () =>{
    const currYear = new Date().getFullYear();
    return(
        <React.Fragment>
            <footer>
                <p>Copyright ⓒ {currYear}</p>
            </footer>
        </React.Fragment>
    )
}
export default Footer;