import React from "react";
import "./dashboard/dashboard.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Spinner from "./img/Spinnergrey.gif";
import Navigation from "./Pages";


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
          <div key={post._id}>
            <div className="alltransation">
              <div
                className="list"

              >
                <p>{post.mobile}</p>
              </div>
              <div
                className="list"

              >
                <p>{post.patient_name}</p>
              </div>
              <div
                className="list">
                <p>{post.email}</p>
              </div>
              <div
                className="list">
                <p>{post.city}</p>
              </div>
            </div>
          </div>
          // <div className="allpatients" key={post._id}>
          //   <div className="patientsinvoice">
          //     {/* <p>
          //       <b>Mobile No- </b> {post.mobile}
          //     </p>
          //     <p>
          //       <b>Patient Name- </b> {post.patient_name}
          //     </p> */}
          //   </div>

          //   <div className="alltransation">
          //     <p style={{ marginLeft: "2em" }}>
          //       <b>Patient Name- </b> {post.patient_name}

          //     </p>
          //     <p style={{ marginLeft: "1em" }}>
          //       <b>Mobile No- </b> {post.mobile}
          //     </p>
          //   </div>

          // </div>
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
        <div className="transactioncard pb15">
          <div className="backarrow">
            {" "}
            <Link to="/Dashboard">
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
          <h2>All Registered Patients</h2>

          <div >
            <div className="alltransation">
              <div
                className="listhead"

              >
                <p>
                  Mobile No.
                </p>
              </div>

              <div
                className="listhead"

              >
                <p>
                  Full Name
                </p>
              </div>

              <div
                className="listhead">
                <p>
                  Email Address
                </p>
              </div>
              <div
                className="listhead">
                <p>
                  Location
                </p>
              </div>

            </div>
          </div>

          {postList}
        </div>
        {/* <div className="dashboard_wrap">        
          <div className="headerNew">         
            {postList}
          </div>
        </div> */}
      </div>
    );
  }
}
export default AllPatients;
