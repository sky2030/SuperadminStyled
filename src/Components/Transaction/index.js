import React from "react";
import Navigation from '../../Pages'
import moment from "moment-timezone";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Spinner from "../Images/Spinnergrey.gif";
import Nav from "../Nav";
import { AppContainer } from '../Style';
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
    PatientHospitalSelect,
    PatientTransStatus,
    TransBotm,
    TransBotmbutton,
    TransactionSpinner,
    TransactionImg,
    BackI
} from './Elements';

const BASE = "https://stage.mconnecthealth.com";
const BASE_URL = `${BASE}/v1/admin/`

class Transation extends React.Component {
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
            dup_post: [],
            hospital: [],
        };
    }

    componentDidMount = () => {
        this.setState({ hospital: [] })
        this.GetTransactions();
    };

    LoadMoreTransaction = () => {
        const { posts, hospital } = this.state
        //const URL = `${BASE_URL}orders?offset = ${posts.length}`

        console.log(`${BASE_URL}orders?offset = ${posts.length}`);
        axios
            .get(`${BASE_URL}orders?offset=${posts.length}`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                console.log(response);
                if (response.data.code === 200) {
                    const data = response.data.data;
                    let dup_hospitals = [];
                    response.data.data.map(item => {
                        let jsonOBJ = {
                            _id: item.hospital_id,
                            name: item.hospital_name
                        }
                        let objString = JSON.stringify(jsonOBJ)
                        let index = dup_hospitals.indexOf(objString)

                        if (index === -1) {
                            console.log("Push :", index)
                            dup_hospitals.push(objString)
                        }
                    })
                    if (posts && posts.length > 0) {
                        this.setState({
                            hospital: hospital.concat(dup_hospitals),
                            posts: posts.concat(data),
                            dup_post: posts.concat(data)
                        })
                    }

                } else {
                    this.setState({
                        posts: [],
                        dup_post: [],
                    });
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

    GetTransactions = () => {
        //console.log("message added")
        axios
            .get(`https://stage.mconnecthealth.com/v1/admin/orders`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                console.log(response);
                if (response.data.code === 200) {
                    const data = response.data.data;
                    let dup_hospitals = [
                        JSON.stringify({
                            _id: "allhospital",
                            name: "All Hospital",
                        })];


                    response.data.data.map(item => {
                        let jsonOBJ = {
                            _id: item.hospital_id,
                            name: item.hospital_name
                        }
                        let objString = JSON.stringify(jsonOBJ)
                        let index = dup_hospitals.indexOf(objString)

                        if (index === -1) {
                            console.log("Push :", index)
                            dup_hospitals.push(objString)
                        }


                    })
                    this.setState({
                        hospital: dup_hospitals,
                        posts: data,
                        dup_post: data
                    })
                    //   console.log("Data has been received!!" + data);
                } else {
                    this.setState({
                        posts: [],
                        dup_post: [],
                        hospital: [],

                    });
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

    handleStatus = (e) => {
        console.log("This is status: ", e.target.value);
        if (e.target.value === "status") {
            this.setState({
                posts: this.state.dup_post
            })
        } else {
            let filterList = this.state.dup_post.filter(item => {
                if (item.status === e.target.value) {
                    return item
                }
            })
            this.setState({ posts: filterList })
        }

    }
    handleOnChange = (e) => {
        console.log("This is hospital ID : ", e.target.value);
        if (e.target.value === "allhospital") {
            this.setState({
                posts: this.state.dup_post
            })
        } else {
            let filterList = this.state.dup_post.filter(item => {
                if (item.hospital_id === e.target.value) {
                    return item
                }
            })
            this.setState({ posts: filterList })
        }

    };
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />;
        }
        if (localStorage.getItem("token") == null) {
            return <Redirect to="/" />;
        }
        const { posts, hospital } = this.state;

        const HospitalList = hospital.length ? (
            hospital.map((item) => {
                let item_copy = JSON.parse(item)
                return (
                    <option key={item_copy._id} value={item_copy._id} >
                        {item_copy.name}
                    </option>
                );
            })
        ) : (
                <div className="center">No Doctor</div>
            );

        const TransactionsList = posts.length ? (
            posts.map((post) => {
                return (
                    <PatientId>
                        <PatientDetail>
                            <PatientList>
                                <PatientP>{post.invoice}</PatientP>
                            </PatientList>
                            <PatientList>
                                <PatientP> {post.hospital_name}</PatientP>
                            </PatientList>
                            <PatientList>
                                <PatientP>
                                    {moment(post.date).format("ll")}
                                </PatientP>
                            </PatientList>
                            <PatientList>
                                <PatientP>{post.doctor_name}</PatientP>
                            </PatientList>
                            <PatientList>
                                <PatientP>{post.patient_name}</PatientP>
                            </PatientList>
                            <PatientList>
                                <PatientP>{post.amount} {post.currency}</PatientP>
                            </PatientList>
                            <PatientList>
                                <PatientP>{post.status}</PatientP>
                            </PatientList>
                        </PatientDetail>
                    </PatientId>

                );
            })
        ) : (
                <TransactionSpinner>
                    <TransactionImg src={Spinner} alt="Loading" />
                </TransactionSpinner>


            );
        return (
            <AppContainer>
                <Nav />
                <PatientTransction>
                    <PatientBackBtn to="/Dashboard">
                        <BackI className="fas fa-arrow-left"></BackI>
                    </PatientBackBtn>
                    <Patientheader>
                        All Transactions
                    </Patientheader>
                    <PatientItems>
                        <PatientItem>
                            <PatientListHead>
                                <PatientP>Invoice No </PatientP>

                            </PatientListHead>
                            <PatientListHead>
                                <PatientP>
                                    <PatientHospitalSelect
                                        id="doctors"
                                        onChange={this.handleOnChange}
                                    //className="transdoctor"
                                    >
                                        {HospitalList}
                                    </PatientHospitalSelect>

                                </PatientP>
                            </PatientListHead>
                            <PatientListHead>
                                <PatientP>Date</PatientP>
                            </PatientListHead>
                            <PatientListHead>
                                <PatientP>Doctor Name</PatientP>
                            </PatientListHead>
                            <PatientListHead>
                                <PatientP>Patient Name</PatientP>
                            </PatientListHead>
                            <PatientListHead>
                                <PatientP>Amount</PatientP>
                            </PatientListHead>
                            <PatientListHead>
                                <PatientP>
                                    <PatientHospitalSelect
                                        id="doctors"
                                        onChange={this.handleStatus}
                                    //className="transdoctor"
                                    >
                                        <PatientTransStatus value="status"> Status </PatientTransStatus>
                                        <PatientTransStatus value="initiated"> INITIATED </PatientTransStatus>
                                        <PatientTransStatus value="paid">PAID</PatientTransStatus>

                                    </PatientHospitalSelect>
                                </PatientP>
                            </PatientListHead>
                        </PatientItem>
                    </PatientItems>
                    {TransactionsList}

                    {posts.length >= 20 ?
                        <TransBotm>
                            <TransBotmbutton onClick={() => this.LoadMoreTransaction()}>
                                <BackI className="fa fa-arrow-down">Load More</BackI>
                            </TransBotmbutton>

                        </TransBotm>
                        : null}



                </PatientTransction>
            </AppContainer>



        );
    }
}
export default Transation;