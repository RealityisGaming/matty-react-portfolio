import React, { Component } from "react";
import Login from "../auth/login"
import loginImg from "../../../static/assets/auth/login.jpg"

export default class Auth extends Component {
    render() {
        return(
            <div className="auth-page-container">
                <div className="left-column" style={{backgroundImage:`url(${loginImg})`}}/>
                <div className="right-column">
                    <Login />   
                </div>
            </div>
        );
  }
}