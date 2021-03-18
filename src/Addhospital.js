import React from "react";
import "./dashboard/dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Nav from "./Nav";
import Navigation from './Pages'


const initialState = {
  hospitalname: "",
  hospitalcode: "",
  email: "",
  phone: "",
  password: "",
  picture: "",
  place: "",
  Landmark: "",
  District: "",
  city: "",
  state: "",
  pincode: "",
  nameError: "",
  emailError: "",
  phoneError: "",
  passwordError: "",
  placeError: "",
  landmarkError: "",
  districtError: "",
  cityError: "",
  stateError: "",
  pinError: "",
  selectedFile: null,
  submitted: false,
  loggedIn: true
};

class Addhospital extends React.Component {
  state = initialState;

  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let passwordError = "";
    let placeError = "";
    let landmarkError = "";
    let districtError = "";
    let cityError = "";
    let stateError = "";
    let pinError = "";

    if (!this.state.hospitalname) {
      nameError = "****Hospital name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "****Invalid Email";
    }
    if (!this.state.phone) {
      phoneError = "****Phone number cannot be blank";
    }
    if (!this.state.password) {
      passwordError = "****Password cannot be blank";
    }
    if (!this.state.place) {
      placeError = "****Place cannot be blank";
    }
    if (!this.state.Landmark) {
      landmarkError = "****Landmark cannot be blank";
    }
    if (!this.state.District) {
      districtError = "****District cannot be blank";
    }
    if (!this.state.city) {
      cityError = "****City cannot be blank";
    }
    if (!this.state.state) {
      stateError = "****State cannot be blank";
    }
    if (!this.state.pincode) {
      pinError = "****Pin Code cannot be blank";
    }

    if (
      emailError ||
      nameError ||
      phoneError ||
      passwordError ||
      placeError ||
      landmarkError ||
      districtError ||
      cityError ||
      stateError ||
      pinError
    ) {
      this.setState({
        emailError,
        nameError,
        phoneError,
        placeError,
        passwordError,
        landmarkError,
        districtError,
        cityError,
        stateError,
        pinError,
      });
      return false;
    }

    return true;
  };

  SubmitHospital = (event) => {
    event.preventDefault();
    const {
      hospitalname,
      email,
      phone,
      password,
      picture,
      place,
      Landmark,
      District,
      city,
      state,
      pincode,
    } = this.state;
    const isValid = this.validate();
    if (isValid) {
      const payload = new FormData();
      payload.append("email", email);
      payload.append("phone", phone);
      payload.append("hospitalname", hospitalname);
      payload.append("password", password);
      payload.append("picture", picture);
      payload.append("place", place);
      payload.append("landmark", Landmark);
      payload.append("district", District);
      payload.append("city", city);
      payload.append("state", state);
      payload.append("pincode", pincode);

      axios({
        url: "https://stage.mconnecthealth.com/v1/admin/hospitals/add",
        method: "POST",
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.code === 200) {
            alert(response.message);
            console.log("Data has been sent to the server successfully");
          } else {
            console.log(response.message);
            alert(response.data.message)
          }
          this.resetUserInputs();
          this.setState({
            submitted: true,
          });
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
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      hospitalname: this.state.hospitalname,
      //  hospitalcode: this.state.hospitalcode,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      picture: this.state.picture,
      place: this.state.place,
      landmark: this.state.Landmark,
      district: this.state.District,
      city: this.state.city,
      state: this.state.state,
      pincode: this.state.pincode,
    };
    console.log(payload);
    const isValid = this.validate();
    if (isValid) {
      axios({
        url: "https://stage.mconnecthealth.com/v1/admin/hospitals/add",
        method: "POST",
        data: payload,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          if (response.code === 200) {
            console.log("Data has been sent to the server successfully");
          } else {
            console.log(response.message);
          }

          console.log(this.state.picture);
          this.resetUserInputs();
          this.setState({
            submitted: true,
          });
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
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onFileHandler = async (event) => {
    await this.setState({
      picture: event.target.files[0],
      loaded: 0,
    });
    console.log(this.state.picture);
  };

  onChangeHandler = (event) => {
    console.log("file to upload:", event.target.files[0]);

    this.getBase64(event.target.files[0], (result) => {
      this.setState({
        picture: result,
      });
      // console.log(result);
    });

    // let file = event.target.files[0];

    // if (file) {
    //   const reader = new FileReader();

    //   reader.onload = this._handleReaderLoaded.bind(this);
    //   reader.readAsBinaryString(file);
    // }
  };

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  //   this.getBase64(idCard, (result) => {
  //      idCardBase64 = result;
  // });

  _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    this.setState({
      picture: btoa(binaryString),
    });
  };

  handleUpload = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    data.append("upload_preset", "skyMedi");
    data.append("cloud_name", "skycloud55");

    fetch("https://api.cloudinary.com/v1_1/skycloud55/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
        this.setState({
          picture: data.url,
        });
        console.log(this.state.picture);
      })
      .catch((Error) => {
        alert(Error)
      });
  };

  resetUserInputs = () => {
    this.setState(initialState);
  };

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    if (this.state.submitted) {
      return <Redirect to="/Allhospitals" />;
    }
    return (
      <div className="Appcontainer">
        <Navigation />
        <div className="adddept">
          <div className="backarrow">
            {" "}
            <Link to="/Allhospitals">
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
          <h2>Add Hospital</h2>

          <form action="confirm" onSubmit={this.handleSubmit}>
            <div className="row">
              <input
                type="text"
                className="inputbox"
                value={this.state.hospitalname}
                name="hospitalname"
                placeholder="Hospital Name"
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.nameError}
              </div>
            </div>
            <div className="row">
              <input
                type="text"
                className="inputbox"
                value={this.state.email}
                name="email"
                required="true"
                placeholder="Email Address"
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.emailError}
              </div>
            </div>
            <div className="row">
              <input
                type="number"
                className="inputbox"
                value={this.state.phone}
                name="phone"
                placeholder="Enter Phone Number"
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.phoneError}
              </div>
            </div>
            <div className="row">
              <input
                type="password"
                className="inputbox"
                value={this.state.password}
                name="password"
                placeholder="hospital login password"
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.passwordError}
              </div>
            </div>

            <div className="row">
              <input
                type="text"
                className="inputbox"
                value={this.state.place}
                name="place"
                placeholder="Enter Building Number/Block"
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.placeError}
              </div>
            </div>
            <div className="row">
              <input
                type="text"
                className="inputbox"
                value={this.state.Landmark}
                name="Landmark"
                placeholder="Enter Landmark "
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.landmarkError}
              </div>
            </div>
            <div className="row">
              <input
                type="text"
                className="inputbox"
                value={this.state.city}
                name="city"
                placeholder="Enter city"
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.cityError}
              </div>
            </div>
            <div className="row">
              <input
                type="text"
                className="inputbox"
                value={this.state.District}
                name="District"
                placeholder="Enter District "
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.districtError}
              </div>
            </div>
            <div className="row">
              <input
                type="text"
                className="inputbox"
                value={this.state.state}
                name="state"
                placeholder="Enter a State"
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.stateError}
              </div>
            </div>
            <div className="row">
              <input
                type="number"
                className="inputbox"
                value={this.state.pincode}
                name="pincode"
                placeholder="Enter a Pincode"
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.pinError}
              </div>
            </div>
            <div className="row">
              <label className="file">
                <input
                  type="file"
                  className="uploadbox"
                  name="file"
                  accept=".jpeg, .png, .jpg"
                  onChange={this.onChangeHandler}
                />
                <span className="file-custom"></span>
              </label>
            </div>
            <div className="btncontainer">
              {/* <button onClick={this.handleUpload}>
                <i className="fas fa-upload"></i>Upload Image{" "}
              </button> */}
              <button type="submit">
                <i className="far fa-paper-plane"></i>Submit
              </button>
              <button onClick={this.resetUserInputs}>
                <i className="fas fa-power-off">
                </i>
                  Reset
              </button>
            </div>
          </form>
          <div className="Footer">
            <img
              alt="Hospital"
              src={this.state.picture}
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Addhospital;
