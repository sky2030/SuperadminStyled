import React from "react";
//import ReactDOM from 'react-dom';
import "./dashboard/dashboard.css";
import contactImg from "./img/contact2.jpg";
//import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Nav from "./Nav";
import Navigation from './Pages'

class Myhospital extends React.Component {
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
    };
  }
  render() {
    if (localStorage.getItem("token") == null) {
      return <Redirect to="/splash" />;
    }
    return (
      <div className="Appcontainer">
        <Navigation />
        <div className="dashboard_wrap1">

          <div className="contact-banner">
            <img
              src={contactImg}
              alt="Contact_img"
            />
          </div>
          <div className="col4 box-shad">
            <h3>Application Support</h3>

            <p>
              <i className="far fa-envelope">
              </i>
                  connect@smhs.motherson.com
              </p>
            <p>
              <i className="fas fa-phone-alt"></i>
                0120-4365125
              </p>

          </div>
        </div>



      </div>
    );
  }
}
export default Myhospital;
