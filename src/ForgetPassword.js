import React from "react";
// import ReactDOM from 'react-dom';
import "./dashboard/dashboard.css";
//import axios from "axios";
import logo from "./img/logo.png";
import { Link, Redirect } from "react-router-dom";

class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");

        let LoggedIn = true;
        if (token == null) {
            LoggedIn = false;
        }
        this.state = {
            email: "",
            password: "",
            token: "",
            LoggedIn,
            emailError: ""
        };
    }

    validate = () => {
        let emailError = "";

        if (!this.state.email) {
            emailError = "****User Name cannot be blank";
        }

        if (emailError) {
            this.setState({ emailError });
            return false;
        }

        return true;
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // submitForm = (e) => {
    //     e.preventDefault();
    //     const { email, password } = this.state;
    //     const isValid = this.validate();
    //     if (isValid) {
    //         const payload = {
    //             email,
    //             password,
    //         };

    //         axios({
    //             url: "https://stage.mconnecthealth.com/v1/hospital/login",
    //             method: "POST",
    //             data: payload,
    //         })
    //             .then(async (response) => {
    //                 const data = response.data.data.access_token;
    //                 console.log(response);
    //                 if (response.data.code === 200) {
    //                     localStorage.setItem("token", data);
    //                     await this.setState({
    //                         token: localStorage.getItem("token"),
    //                     });
    //                 } else {
    //                     alert(response.data.message)
    //                     console.log("Something Went Wrong", e);
    //                 }
    //             }
    //             )
    //             .catch((Error) => {
    //                 alert(Error + " Server Not Responding")
    //                 console.log("internal server error");
    //             });
    //     }

    // this.setState({
    //   token:localStorage.getItem("token")
    // })

    // if (this.state.token === '') {
    //   return null
    // }
    // else {
    //   this.setState({
    //     LoggedIn: true
    //   })
    // }
    // if(email ==="8882973229" && password ==="shiv"){
    //   localStorage.setItem("token", "aaaefdgadftaerd")
    //   this.setState({
    //     LoggedIn: true
    //   })
    // }
    //};
    render() {
        if (this.state.token !== "") {
            return <Redirect to="/Login" />;
        }

        return (
            <section className="login">
                <img src={logo} alt="logo" />
                <h2>Welcome to VRCure!</h2>
                <form autocomplete="off" onSubmit={this.submitForm}>
                    <div className="loginbox">
                        <i className="fas fa-lock"></i>
                        <div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailError}
                            </div>
                            <input
                                placeholder="Enter the Email Address"
                                type="text"
                                id="email"
                                name="email"
                            //value={this.state.email}
                            //onChange={this.onChange}
                            ></input>
                        </div>
                        <div style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <div>
                                <Link to="/Login">
                                    {/* <input type="submit" className="button" /> */}
                                    <button type="submit" className='cancelbtn' >Cancel</button>
                                </Link>
                            </div>
                            <div>
                                {/* <input type="submit" className="button" /> */}
                                <button type="submit" >Submit</button>
                            </div>

                        </div>

                    </div>

                </form>
            </section>
        );
    }
}
export default ForgetPassword;
