import React from 'react';
//import ReactDOM from 'react-dom';
//import './dashboard.css';
//import bgimg from './img/bgimg.jpg';
//import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Nav from "../Nav";
//import { Link } from "react-router-dom";
import Navigation from '../../Pages';
import { AppContainer } from '../Style';
import bgimg from '../Images/bgimg.jpg';
import { Helmet } from 'react-helmet';
import {
    DashboardWrapper,
    DashboardMaincontent,
    DashboardImg,
    DashboardItems,
    Dashboardsubtitle,
    DashboardItem,
    DashboardLink,
    DashboardI
} from './Elements';

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

            <AppContainer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>VRCure Admin Dashboard</title>
                    <meta name='description' content='VRCure Admin Dashboard Portal' />
                    <meta name='VRCure' content='VRCure Superadmin Panel' />
                </Helmet>
                < Nav />
                <DashboardWrapper>

                    <DashboardImg src={bgimg} alt='Dashboard' />

                    <DashboardItems>
                        <DashboardItem>
                            <DashboardLink to="/Allhospitals">
                                <DashboardI className="fas fa-hospital"></DashboardI>  All Hospitals
                            </DashboardLink>
                        </DashboardItem>

                        <DashboardItem>
                            <DashboardLink to='/Alldoctors'>
                                <DashboardI className="fas fa-user-md"></DashboardI> All Doctors
                            </DashboardLink>
                        </DashboardItem>

                        <DashboardItem>
                            <DashboardLink to='/Allpatients'>
                                <DashboardI className="fas fa-procedures"></DashboardI> All Patients
                            </DashboardLink>
                        </DashboardItem>

                        <DashboardItem>
                            <DashboardLink to='/Transaction'>
                                <DashboardI className="fas fa-credit-card"></DashboardI>  Transaction
                            </DashboardLink>
                        </DashboardItem>
                    </DashboardItems>

                </DashboardWrapper>
            </AppContainer>



        )
    }
}
export default Dashboard;