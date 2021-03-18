import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Spinner from "../Images/Spinnergrey.gif";
import Navigation from "../../Pages";
import Nav from '../Nav'
import { AppContainer } from '../Style';
import { Helmet } from "react-helmet";

import {
    PatientId,
    PatientDetail,
    PatientBackBtn,
    PatientItem,
    PatientListHead,
    PatientItems,
    PatientList,
    PatientP, PatientTransction,
    Patientheader,
    BackLink,
    PatientImg,
    PatientSpinner,
    BackI
} from './Elements';

const initialState = {
    showPerPage: ""

};
class AllPatients extends React.Component {
    state = initialState;

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
            hospitals: [],
            hospitalcode: "",
            showPerPage: 4,
            pagination: {
                start: 0,
                end: this.showPerPage
            }
        };
    }
    componentDidMount = () => {
        this.GetPatients();
        this.getHospital();
    };

    handleOnChange = (e) => {
        this.setState({
            hospitalcode: e.target.value,
        });
    };

    // handlePageChange = (pageNumber) => {
    //   console.log(`active page is ${pageNumber}`);
    //   this.setState({ showPerPage: pageNumber });
    // }

    onPaginationChange = (start, end) => {
        // const { start, end } = target;
        this.setState({
            pagination: {
                start: start,
                end: end
            }
        });
    };

    GetPatients = () => {
        axios
            .get("https://stage.mconnecthealth.com/v1/admin/patients/", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                console.log(response);
                if (response.data.code === 200) {
                    const data = response.data.data;
                    this.setState({ posts: data });
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

    getHospital = () => {
        axios
            .get("https://stage.mconnecthealth.com/v1/admin/hospitals/", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                console.log(response);
                const data = response.data.data;
                this.setState({ hospitals: data });
                console.log("Data has been received!!");
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
        const {
            //hospitals, 
            posts } = this.state;
        const { start, end } = this.state.pagination
        // const hospitallist = hospitals.length ? (
        //   hospitals.map((item) => {
        //     return (
        //       <option key={item._id} value={item.hospitalcode}>
        //         {item.hospitalname}
        //       </option>
        //     );
        //   })
        // ) : (
        //     <div className="center">No Patient</div>
        //   );

        const postList = posts.length ? (
            posts.slice(start, end).map((post) => {
                return (
                    <PatientId>
                        <PatientDetail>
                            <PatientList>
                                <PatientP>{post.mobile}</PatientP>
                            </PatientList>
                            <PatientList>
                                <PatientP>{post.patient_name}</PatientP>
                            </PatientList>
                            <PatientList>
                                <PatientP> {post.email}</PatientP>
                            </PatientList>
                            <PatientList>
                                <PatientP>{post.city}</PatientP>
                            </PatientList>
                        </PatientDetail>
                    </PatientId>

                );
            })
        ) : (
            <PatientSpinner>
                <PatientImg src={Spinner} alt="Loading" />
            </PatientSpinner>

        );
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />;
        }

        return (
            <AppContainer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Patients With VRCure</title>
                    <meta name='description' content='Patients on VRCure Portal' />
                    <meta name='VRCure' content='VRCure Superadmin Panel' />
                </Helmet>
                <Nav />
                <PatientTransction>
                    <PatientBackBtn to="/Dashboard">
                        <BackI className="fas fa-arrow-left"></BackI>
                    </PatientBackBtn>
                    <Patientheader>
                        All Registered Patients
                    </Patientheader>
                    <PatientItems>
                        <PatientItem>
                            <PatientListHead>
                                <PatientP>Mobile No.</PatientP>
                            </PatientListHead>
                            <PatientListHead>
                                <PatientP>Full Name</PatientP>
                            </PatientListHead>
                            <PatientListHead>
                                <PatientP>  Email Address</PatientP>
                            </PatientListHead>
                            <PatientListHead>
                                <PatientP>Location</PatientP>
                            </PatientListHead>
                        </PatientItem>
                    </PatientItems>
                    {postList}
                </PatientTransction>
            </AppContainer>


        );
    }
}
export default AllPatients;
