import React, { Component } from "react";
import Login from "../auth/login"
import loginImg from "../../../static/assets/auth/login.jpg"

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/")
    }
    handleUnSuccessfulAuth() {
        this.props.handleUnSuccessfulLogin();
    }
    render() {
        return(
            <div className="auth-page-container">
                <div className="left-column" style={{backgroundImage:`url(${loginImg})`}}/>
                <div className="right-column">
                    <Login handleSuccessfulAuth = {this.handleUnSuccessfulAuth}
                    handleUnSuccessfulAuth = {this.handleUnSuccessfulAuth}/>   
                </div>
            </div>
        );
  }
}