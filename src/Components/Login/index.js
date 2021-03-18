import React from "react";
//import ReactDOM from 'react-dom';
//import "./dashboard/dashboard.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import logo from "../Images/logo.png";
import { Helmet } from 'react-helmet'
import {
    LoginBox,
    LoginButton,
    LoginForm,
    LoginHeader,
    LoginI,
    LoginDiv,
    LoginImg,
    LoginInput,
    LoginP,
    LoginSection,
    LoginSubmit,
    LoginTitle,
    LoginNew,
    PasswordBox
} from './Elements';

class Login extends React.Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");

        let LoggedIn = true;
        if (token == null) {
            LoggedIn = false;
        }
        this.state = {
            hidden: true,
            username: "",
            password: "",
            token: "",
            LoggedIn,
            usernameError: "",
            passwordError: ""
        };
    }

    validate = () => {
        let usernameError = "";
        let passwordError = "";

        if (!this.state.username) {
            usernameError = "****User Name cannot be blank";
        }

        if (!this.state.password) {
            passwordError = "****password cannot be blank";
        }

        if (usernameError || passwordError) {
            this.setState({ usernameError, passwordError });
            return false;
        }

        return true;
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitForm = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        const isValid = this.validate();
        if (isValid) {
            const payload = {
                username,
                password,
            };

            axios({
                url: "https://stage.mconnecthealth.com/v1/admin/login",
                method: "POST",
                data: payload,
            })
                .then((response) => {
                    console.log(JSON.stringify(response))
                    if (response.status === 200) {
                        const data = response.data.data.token;
                        localStorage.setItem("token", data);
                        this.setState({
                            token: localStorage.getItem("token"),
                        });

                    }
                    else {
                        alert(response.data.message)
                        console.log(response.data.message);
                    }
                })
                .catch((Error) => {
                    if (Error.message === "Network Error") {
                        alert("Please Check your Internet Connection")
                        console.log(Error.message)
                        return;
                    }
                    if (Error.response.data.code === 401) {
                        alert(Error.response.data.message)
                        console.log(JSON.stringify("Error 401: " + Error.response.data.message))
                    }
                    else {
                        alert("Something Went Wrong")
                    }
                });
        }
    };

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        if (this.state.token !== "") {
            return <Redirect to="/Dashboard" />;
        }
        return (
            <LoginSection>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Admin Login</title>
                    <meta name='description' content='VRCure Login into Admin Portal' />
                    <meta name='VRCure' content='VRCure Superadmin Panel' />
                </Helmet>
                <LoginImg src={logo} alt="logo" />
                <LoginHeader>WELCOME TO VRCURE!</LoginHeader>
                <LoginForm autocomplete="off" onSubmit={this.submitForm}>
                    <LoginBox>
                        <LoginI >
                            <i className="fas fa-user"></i>
                        </LoginI>

                        <LoginInput
                            placeholder="Your User Name"
                            type="text"
                            id="User name"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange}
                        />


                    </LoginBox>
                    <LoginNew>
                        {this.state.usernameError}
                    </LoginNew>

                    <LoginBox>
                        <LoginI>
                            <i class="fas fa-key"></i>
                        </LoginI>

                        <PasswordBox>
                            <LoginInput
                                placeholder="Your Password"
                                type={this.state.hidden ? 'password' : 'text'}
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />

                            <LoginP onClick={this.toggleShow}>
                                {this.state.hidden ? <i class="fas fa-eye-slash"></i> : <i class="fas fa-eye"></i>}
                            </LoginP>
                        </PasswordBox>


                    </LoginBox>
                    <LoginNew >
                        {this.state.passwordError}
                    </LoginNew>

                    <LoginSubmit>
                        <LoginButton id="submit">
                            Login
                        </LoginButton>
                    </LoginSubmit>

                </LoginForm>



            </LoginSection >


        );
    }
}
export default Login;
