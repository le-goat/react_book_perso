import React, {Component} from "react";
import GoogleLogin, {GoogleLogout} from "react-google-login";
import '../css/Header.css';

function Header() {
    return(
        <div className="header">
            <ul>
                <li>Bouton Login</li>
                <li>Bouton Logout</li>
                <li>Find a random image</li>
            </ul>
        </div>
    )
}

export default Header