import React from 'react';
//import ReactDOM from 'react-dom';
import './dashboard/dashboard.css';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    Display = () => {
        var x = document.getElementById("myNav");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    render() {
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <Link to='/Dashboard'> <img src={logo} alt="logo" />  </Link>
                    </div>
                    <ul className="animated slideInDown" id="myNav">
                        <li><Link to='/Dashboard'><i className="fas fa-home"></i>Dashboard</Link></li>
                        <li><Link to='/Allhospitals'><i className="far fa-hospital"></i>Hospitals</Link></li>
                        <li><Link to='/Alldoctors'><i className="fas fa-user-md"></i>Doctors</Link></li>
                        <li><Link to='/AllPatients'><i className="fas fa-procedures"></i>Patients</Link></li>
                        <li><Link to='/Contact'><i className="fas fa-phone-alt"></i>Contact</Link></li>
                        <li><Link to='/splash'><i className="fas fa-user-lock"></i>logout</Link></li>
                    </ul>
                    <div onClick={() => this.Display()} className="icon">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>

            </header>
        )
    }

}
export default Nav;


