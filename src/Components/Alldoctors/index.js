import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Spinner from "../Images/Spinnergrey.gif";
import FemaleAvatar from '../Images/Female-Doctor.png';
import MaleAvatar from '../Images/Male-Doctor.png';
import Navigation from '../../Pages';
import { AppContainer } from '../Style';
import Nav from "../Nav";
import { Helmet } from "react-helmet";


import {
    DoctorCard,
    DoctorHeading,
    DoctorCardItems,
    DoctorImg,
    DoctorPic,
    DoctorDetails,
    DoctorDetailsItem,
    DoctorI,
    DoctorWrapper,
    LeftPanel,
    DoctorSearch,
    DoctorIcon,
    DoctorSearchdiv,
    DoctorSearchInput,
    DoctorSelect,
    DoctorFLexcontainer,
    HeightAdjust,
    SpinnerImg,
    DoctorSpinner,
    ApprovalDiv,
    Approvalb
} from './Elements'

class Alldoctors extends React.Component {
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
            alldoctors: [],
            hospitals: [],
            hospitalcode: "",
            activePage: 6,
            rawDoct: [],
            doctsearch: ""
        };
    }

    handleOnChange = (e) => {
        this.setState({
            hospitalcode: e.target.value,
        });



        console.log("this is hospital code : ", e.target.value);
        let dup_post = [...this.state.alldoctors];
        if (e.target.value === "drhospitalcode") {
            this.setState({
                posts: dup_post,
            });
            return;
        }

        console.log(dup_post);
        dup_post = dup_post.filter((item) => {
            console.log("Hospital code : ", item.hospitalcode);
            if (item.hospitalcode === e.target.value) {
                return item;
            }
        });

        this.setState({
            posts: dup_post,
        });
    };

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }



    fetchAll = () => {
        //console.log(`this is hospital code ${this.state.hospitalcode}`);
        let URL = `https://stage.mconnecthealth.com/v1/admin/doctors`;
        console.log(URL);
        axios
            .get(URL, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                console.log(response);
                const data = response.data.data;
                this.setState({
                    posts: data,
                    rawDoct: data
                });
                this.setState({ alldoctors: data });
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

    componentDidMount = () => {
        // console.log(`this is hospital code ${this.state.hospitalcode}`);
        this.getHospital();
        this.fetchAll();
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
                        hospitals: data
                    });
                } else {
                    alert(response.data.message)
                }
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

    searchDoctHandler = (e) => {
        const { rawDoct } = this.state
        this.setState({
            doctsearch: e.target.value
        })
        const filteredOptions = rawDoct.filter(item => {
            return item.first_name.toLowerCase().includes(e.target.value.trim().toLowerCase());
        });
        this.setState({
            posts: filteredOptions
        })
    }

    render() {
        const { hospitals, posts, doctsearch } = this.state;
        let alldoctorjson = [
            {
                _id: "alldoctor",
                hospitalcode: "drhospitalcode",
                hospitalname: "All Doctors",
            },
        ];

        alldoctorjson = alldoctorjson.concat([...hospitals]);
        //  hospitals = [...alldoctorjson];
        const hospitallist = alldoctorjson.length ? (
            alldoctorjson.map((item) => {
                return (
                    <option key={item._id} value={item.hospitalcode}>
                        {item.hospitalname}
                    </option>
                );
            })
        ) : (
            <div className="center">No Doctor</div>
        );

        const postList = posts.length ? (
            posts.map((post) => {
                return (
                    <DoctorCard>
                        <DoctorHeading>
                            Dr. {post.first_name} {post.last_name}
                        </DoctorHeading>
                        <DoctorCardItems>
                            <DoctorPic>

                                {post.gender !== "Male" ?
                                    <DoctorImg src={post.picture === "" || !post.picture ? FemaleAvatar : post.picture}
                                        alt="Doctor" />

                                    :

                                    <DoctorImg
                                        src={post.picture === "" || !post.picture ? MaleAvatar : post.picture}
                                        alt="Doctor"
                                    />
                                }

                            </DoctorPic>
                            <DoctorDetails>
                                <DoctorDetailsItem>
                                    <b>{post.department}</b> | {post.degree}
                                </DoctorDetailsItem>
                                <DoctorDetailsItem>
                                    <DoctorI className="fas fa-star"></DoctorI>{" "}

                                    <DoctorI className="fas fa-star"></DoctorI>{" "}

                                    <DoctorI className="fas fa-star"></DoctorI>{" "}

                                    <DoctorI className="fas fa-star"></DoctorI>{" "}

                                </DoctorDetailsItem>
                                <DoctorDetailsItem>
                                    Rs. {post.consultation}
                                </DoctorDetailsItem>
                                <DoctorDetailsItem>
                                    {post.designation}
                                </DoctorDetailsItem>
                                <DoctorDetailsItem>
                                    {post.is_approved === false ?
                                        <ApprovalDiv>
                                            <Approvalb>Approval Pending from Hospital </Approvalb>
                                            {/* <Approvalb>Approve this Doctor if Belongs to Your Hospital</Approvalb> */}

                                        </ApprovalDiv>

                                        : null}
                                </DoctorDetailsItem>
                            </DoctorDetails>
                        </DoctorCardItems>
                    </DoctorCard>


                );
            })
        ) : (
            <DoctorSpinner>
                <SpinnerImg src={Spinner} alt="Loading" />
            </DoctorSpinner>

        );

        if (this.state.loggedIn === false) {
            return <Redirect to="/" />;
        }
        return (
            <AppContainer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Doctors With VRCure</title>
                    <meta name='description' content='Doctors on VRCure Portal' />
                    <meta name='VRCure' content='VRCure Superadmin Panel' />
                </Helmet>
                <Nav />
                <DoctorWrapper>
                    <LeftPanel>
                        <DoctorSearch>
                            <DoctorIcon className="fa fa-search" aria-hidden="true"></DoctorIcon>
                            <DoctorSearchdiv>
                                <DoctorSearchInput
                                    placeholder="Search for Doctor"

                                    value={doctsearch}
                                    onChange={this.searchDoctHandler} />


                            </DoctorSearchdiv>

                        </DoctorSearch>
                        <DoctorSelect
                            id="hospital"
                            className="ChooseDoctor"
                            onChange={this.handleOnChange}>
                            {hospitallist}
                        </DoctorSelect>
                    </LeftPanel>
                    <DoctorFLexcontainer >
                        {postList}
                    </DoctorFLexcontainer>
                    <HeightAdjust>

                    </HeightAdjust>
                </DoctorWrapper>
            </AppContainer>


        );
    }
}
export default Alldoctors;
