import React from "react";
//import ReactDOM from 'react-dom';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import HospitalDefault from '../Images/Default_Hospital.jpg';
//import Navigation from '../../Pages';
import Nav from '../Nav'
import { AppContainer } from '../Style';
import { Helmet } from 'react-helmet'
import {
    HospitalBack,
    HospitalItems,
    HospitalP,
    HospitalPIcon,
    HospitalWrap,
    HospitalBanner,
    HospitalBackIcon,
    HospitalImg,
    HospitalFlex,
    HospitalHeader,
    Hospitalb
} from './Elements'

class Myhospital extends React.Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }
        this.state = {
            loggedIn,
            hospitals: {},
        };
    }
    componentDidMount = () => {
        console.log(`This is Hospital ID ${this.props.match.params.id}`);
        this.getHospital();
        //  this.setState({hospital: this.props.match.params});
        //  console.log(`This is Hospital Name ${this.props.match.params.hospitalname}`)
    };

    getHospital = () => {
        axios
            .get(
                "https://stage.mconnecthealth.com/v1/admin/hospitals/" +
                this.props.match.params.id,
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            )
            .then((response) => {
                console.log(response);
                if (response.data.code === 200) {
                    const data = response.data.data;
                    this.setState({ hospitals: data });
                    console.log("Data has been received!!");
                } else {
                    alert(response.data.message)
                }
            })
            .catch((Error) => {
                if (Error.message === "Network Error") {
                    alert("Please Check your Internet Connection")
                    console.log(Error.message)
                    return;
                }
                if (Error.response.data.code === 403) {
                    alert(Error.response.data.message)
                    console.log(JSON.stringify("Error 403: " + Error.response.data.message))
                    this.setState({
                        loggedIn: false
                    })

                }
                else {
                    alert("Something Went Wrong")
                }
            });
    };
    render() {
        const { hospitals } = this.state;

        if (this.state.loggedIn === false) {
            return <Redirect to="/" />;
        }
        return (
            <AppContainer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Hospital Details</title>
                    <meta name='description' content='VRCure Hospital Details' />
                    <meta name='VRCure' content='VRCure Superadmin Panel' />
                </Helmet>
                <Nav />
                <HospitalWrap>
                    <HospitalBack to="/Allhospitals">
                        <HospitalBackIcon className="fas fa-arrow-left"></HospitalBackIcon>
                        Back
                    </HospitalBack>
                    <HospitalBanner>
                        <HospitalImg src={hospitals.picture === "" || !hospitals.picture ? HospitalDefault : hospitals.picture}
                            alt="Hospital" />

                    </HospitalBanner>
                    <HospitalFlex key={hospitals.code}>
                        <HospitalItems>
                            <HospitalHeader>
                                {hospitals.hospitalname} {hospitals.code}
                            </HospitalHeader>
                            <HospitalP>
                                <HospitalPIcon className="far fa-envelope"> </HospitalPIcon>
                                {hospitals.email}
                            </HospitalP>
                            <HospitalP>
                                <HospitalPIcon className="fas fa-phone-alt"> </HospitalPIcon>

                                {hospitals.phone}
                            </HospitalP>
                            <HospitalP>
                                <HospitalPIcon className="fas fa-phone-alt"></HospitalPIcon>
                                {hospitals.emergencyNo}

                            </HospitalP>

                        </HospitalItems>

                        <HospitalItems>
                            <HospitalHeader>
                                <HospitalPIcon className="fas fa-map-marker-alt"></HospitalPIcon>
                                Address
                            </HospitalHeader>
                            <HospitalP>
                                <Hospitalb>
                                    Place:{" "}
                                </Hospitalb>
                                {hospitals.place}

                            </HospitalP>
                            <HospitalP>

                                <Hospitalb>Landmark: </Hospitalb>

                                {hospitals.landmark}{" "}

                            </HospitalP>
                            <HospitalP>

                                <Hospitalb>District: </Hospitalb>
                                {hospitals.district}

                            </HospitalP>
                            <HospitalP>

                                <Hospitalb>State: </Hospitalb>
                                {hospitals.state} <Hospitalb>Pin Code:</Hospitalb>{" "}
                                {hospitals.pincode}

                            </HospitalP>

                        </HospitalItems>
                    </HospitalFlex>
                </HospitalWrap>
            </AppContainer>

        );
    }
}
export default Myhospital;
