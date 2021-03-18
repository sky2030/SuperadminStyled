import React, { Component } from "react";
//import ReactDOM from 'react-dom';
import "./dashboard/dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Nav from "./Nav";
import Spinner from "./img/Spinnergrey.gif";
import HospitalDefault from './img/Default_Hospital.jpg';
import './CSS/Searchstyle.css'
import Navigation from './Pages'

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
          <Link
            to={"/Myhospital/" + post.hospitalcode}
            className="hospital-card"
          >
            <h3>{post.hospitalname}</h3>
            <div className="doctor-card1">
              <div className="hospitalimg">
                {/* <img src={post.picture} alt="Hospital" /> */}
                <img
                  src={post.picture === "" || !post.picture ? HospitalDefault : post.picture}
                  alt="Hospital"
                />
              </div>
              <div className="doctordetails">
                <h5> {post.place}</h5>
                <p>
                  {post.landmark} {post.district}
                </p>

                <p>
                  {" "}
                  {post.state} {post.pincode}{" "}
                </p>
              </div>
            </div>
          </Link>
        );
      })
    ) : (
      <div
        className="center"
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "150px",
          marginBottom: "100px",
        }}
      >
        <img src={Spinner} alt="Loading" />
      </div>
    );

    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Appcontainer">
        <Navigation />
        <div className="dashboard_wrap">
          <div>
            <div className='searchhospcss'>
              {" "}
              <i class="fa fa-search" aria-hidden="true"></i>
              <div>
                <input

                  placeholder="Search for Hospital"
                  value={hospsearch}
                  onChange={this.searchHospHandler}

                />
              </div>

            </div>
          </div>
          <div className="flex-container">
            {postList}
          </div>

        </div>
        <div className="add_departmet">
          <Link to="/Addhospital">
            <i className="fas fa-plus"></i> Add Hospital{" "}
          </Link>
        </div>
      </div>
    );
  }
}
export default AllHospital;
