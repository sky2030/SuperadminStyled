import React from 'react';
//import ReactDOM from 'react-dom';
import './dashboard.css';
import bgimg from './img/bgimg.jpg';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Nav from "../Nav";
//import { Link } from "react-router-dom";
import Navigation from '../Pages'

class Dashboard extends React.Component {

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
            return <Redirect to="/splash" />
        }
        return (
            <div className='Appcontainer'>
                <Navigation />
                <div className="dashboard_wrap">
                    <div className="dashboard_maincontent">
                        <img src={bgimg} alt="doctor-img" />
                        <div className="dashboard_icons">
                            <ul>

                                <li><Link to='/Allhospitals'>
                                    <i className="fas fa-hospital">
                                    </i>All Hospitals
                                        </Link>
                                </li>
                                <li><Link to='/Alldoctors'>
                                    <i className="fas fa-user-md">
                                    </i>All Doctors
                                    </Link>
                                </li>
                                <li><Link to='/Allpatients'>
                                    <i className="fas fa-procedures">
                                    </i>All Patients
                                    </Link>
                                </li>
                                <li><Link to='/Transaction'>
                                    <i className="fas fa-credit-card">
                                    </i>Transaction
                                        </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
export default Dashboard;