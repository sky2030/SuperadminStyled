import React from "react";
//import ReactDOM from 'react-dom';
import "./dashboard/dashboard.css";
//import docicon from './img/doctor-icon.jpg';
//import maxhosp from './img/maxhospital.jpg';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import HospitalDefault from './img/Default_Hospital.jpg';
import Navigation from './Pages'

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
      <div className='Appcontainer'>
        <Navigation />
        <div className="dashboard_wrap1">
          <Link to="/Allhospitals" className="backbtn">
            <i className="fas fa-arrow-left"></i> Back
        </Link>

          <div className="banner-text">
            {/* <img
              // className="imgclassName"
              src={hospitals.picture}
              alt="hospital_img"
            /> */}

            <img
              src={hospitals.picture === "" || !hospitals.picture ? HospitalDefault : hospitals.picture}
              alt="Hospital"
            />
          </div>
          <div className="flex-container scroll" key={hospitals.code}>
            <div className="col5 box-shad">
              <h3>
                {hospitals.hospitalname} {hospitals.code}
              </h3>
              <p>
                <i className="far fa-envelope"></i> {hospitals.email}
              </p>
              <p>
                <i className="fas fa-phone-alt"></i>
                {hospitals.phone}
              </p>
              <p style={{ color: 'red' }}>
                <i className="fas fa-phone-alt"></i>
                {hospitals.emergencyNo}
              </p>
            </div>
            <div className="col5 box-shad">
              <h3>
                <i className="fas fa-map-marker-alt"></i>Address
              </h3>
              <p>
                <b>Place:</b>
                {hospitals.place}
              </p>
              <p>
                <b>Landmark:</b>
                {hospitals.landmark}{" "}
              </p>
              <p>
                <b>District:</b> {hospitals.district}
              </p>
              <p>
                <b>State:</b> {hospitals.state} <b>Pin Code:</b>{" "}
                {hospitals.pincode}
              </p>
            </div>
          </div>
        </div>



      </div>
    );
  }
}
export default Myhospital;
