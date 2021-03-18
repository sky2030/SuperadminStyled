import React, { Component } from "react";
//import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Spinner from "../Images/Spinnergrey.gif";
import HospitalDefault from '../Images/Default_Hospital.jpg';
import Navigation from '../../Pages'
import { AppContainer } from '../Style';
import Nav from "../Nav";
import { Helmet } from "react-helmet";


import {
    HospitalCard,
    HospitalCardHeader,
    HospitalDetails, HospitalDiv,
    HospitalFlexcontainer,
    HospitalIcon,
    HospitalImg,
    HospitalInpHeader,
    HospitalItems,
    HospitalLinkIcon,
    HospitalSearch,
    HospitalSearchInput,
    HospitalSubhead,
    HospitalWrapper,
    HospitaladdLink,
    DetailsHeader,
    DetailsP,
    Spinnerdiv,
    SpinnerImg

} from './Elements'

class AllHospital extends Component {
    //const Allhospitals = (props) => {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }
        this.state = {
            loggedIn,
            posts: [],
            rawHospital: [],
            hospsearch: ""
        };
    }
    componentDidMount = () => {
        this.getHospital();
    };

    getHospital = () => {
        axios
            .get("https://stage.mconnecthealth.com/v1/admin/hospitals/", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                console.log(response);
                if (response.data.code === 200) {
                    const data = response.data.data;
                    this.setState({
                        posts: data,
                        rawHospital: data
                    });
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

    searchHospHandler = (e) => {
        const { rawHospital } = this.state
        this.setState({
            hospsearch: e.target.value
        })
        const filteredOptions = rawHospital.filter(item => {
            return item.hospitalname.toLowerCase().includes(e.target.value.trim().toLowerCase());
        });
        this.setState({
            posts: filteredOptions
        })
    }
    render() {
        const { posts, hospsearch } = this.state;
        const postList = posts.length ? (
            posts.map((post) => {
                return (
                    <HospitalCard to={"/Myhospital/" + post.hospitalcode}>
                        <HospitalCardHeader>
                            {post.hospitalname}
                        </HospitalCardHeader>
                        <HospitalSubhead>
                            <HospitalItems>
                                <HospitalImg src={post.picture === "" || !post.picture ? HospitalDefault : post.picture}
                                    alt="Hospital" />
                            </ HospitalItems >
                            <HospitalDetails>
                                <DetailsHeader>
                                    {post.place}
                                </DetailsHeader>
                                <DetailsP>
                                    {post.landmark} {post.district}
                                </DetailsP>
                                <DetailsP>
                                    {post.state} {post.pincode}{" "}
                                </DetailsP>
                            </HospitalDetails>
                        </HospitalSubhead>
                    </HospitalCard>


                );
            })
        ) : (

            <Spinnerdiv>
                <SpinnerImg src={Spinner} alt="Loading" />
            </Spinnerdiv>

        );

        if (this.state.loggedIn === false) {
            return <Redirect to="/" />;
        }
        return (
            <AppContainer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Hospitals With VRCure</title>
                    <meta name='description' content='Hospitals with VRCure' />
                    <meta name='VRCure' content='VRCure Superadmin Panel' />
                </Helmet>
                <Nav />
                <HospitalWrapper>
                    <HospitalDiv>
                        <HospitalSearch>
                            <HospitalIcon className="fa fa-search" aria-hidden="true"></HospitalIcon>
                            <HospitalInpHeader>
                                <HospitalSearchInput
                                    placeholder="Search for Hospital"
                                    value={hospsearch}
                                    onChange={this.searchHospHandler}

                                />
                            </HospitalInpHeader>
                        </HospitalSearch>

                    </HospitalDiv>

                    <HospitalFlexcontainer>
                        {postList}
                    </HospitalFlexcontainer>

                </HospitalWrapper>

                <HospitaladdLink to="/Addhospital">
                    <HospitalLinkIcon className="fas fa-plus"> </HospitalLinkIcon>
                    Add Hospital{" "}
                </HospitaladdLink>

            </AppContainer>


        );
    }
}
export default AllHospital;
