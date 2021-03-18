import React from 'react';
//import ReactDOM from 'react-dom';
//import './dashboard/dashboard.css';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

import {
    NavDisplay,
    NavI,
    NavHeader,
    NavImg,
    NavLi,
    NavLink,
    NavLogo,
    NavulLink,
    NavUl,
    NavTitle
} from './Elements'

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
            <NavHeader>
                <NavTitle>
                    <NavLogo>
                        <NavLink to='/Dashboard'>
                            <NavImg src={logo} alt="logo" />
                        </NavLink>
                    </NavLogo>
                    <NavUl id="myNav" className="animated slideInDown">
                        <NavLi>
                            <NavulLink to='/Dashboard'>
                                <NavI className="fas fa-home"></NavI>
                                {/* <i className="fas fa-home"></i> */}
                                    Dashboard

                            </NavulLink>
                        </NavLi>

                        <NavLi>
                            <NavulLink to='/Allhospitals'>
                                <NavI className="far fa-hospital"></NavI>
                                   Hospitals

                            </NavulLink>
                        </NavLi>
                        <NavLi>
                            <NavulLink to='/Alldoctors'>
                                <NavI className="fas fa-user-md"></NavI>
                                    Doctors

                            </NavulLink>
                        </NavLi>
                        <NavLi>
                            <NavulLink to='/AllPatients'>
                                <NavI className="fas fa-procedures"></NavI>
                                    Patients

                            </NavulLink>
                        </NavLi>
                        <NavLi>
                            <NavulLink to='/Contact'>
                                <NavI className="fas fa-phone-alt"> </NavI>
                                  Contact

                            </NavulLink>
                        </NavLi>
                        <NavLi>
                            <NavulLink to='/splash'>
                                <NavI className="fas fa-user-lock"></NavI>
                                  Logout

                            </NavulLink>
                        </NavLi>

                    </NavUl>
                    <NavDisplay onClick={() => this.Display()}>
                        <i class="fa fa-bars"></i>
                    </NavDisplay>
                </NavTitle>
            </NavHeader>


        )
    }

}
export default Nav;


