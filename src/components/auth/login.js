import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions", 
        {
            client:{
                email: this.state.email,
                password: this.state.password
            }
        },
            {withCredentials: true}
        ).then(response=> {
            if (response.data.status === "created") {
                this.props.handleSuccessfulAuth();
            } else {
                this.setState({
                    errorText: 'Wrong email or password'
                });
                this.props.handleUnSuccessfulAuth();
            }
        })

        .catch(error => {
            this.setState({
                errorText: "An error occured"
            });
            this.componentWillReceiveProps.handleUnSuccessfulAuth();
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>FIll this out for the sauce</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name='email' placeholder='Your email' value={this.state.email} onChange={this.handleChange} />
                    <input type="password" name='password' placeholder='Your password' value={this.state.password} onChange={this.handleChange} />
                </form>

                <div>
                    <button type="Submit">Login</button>
                </div>
            </div>
        )
    }
}
