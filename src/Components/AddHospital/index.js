import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
//import Navigation from '../../Pages'
import Nav from "../Nav";
import { AppContainer } from '../Style';
import { Helmet } from 'react-helmet'
import {
    HospitalWrapper,
    HospitalBackbtn,
    HospitalBtnContainer,
    HospitalError,
    HospitalFooter,
    HospitalForm,
    HospitalI,
    HospitalInput,
    HospitalLabel,
    HospitalRow,
    Hospitalbutton,
    Hospitalheading,
    BackLink,
    HospitalImg,
    BackI,
    PictureSelection
} from './Elements';


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
            <AppContainer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Hospital Onboarding</title>
                    <meta name='description' content='VRCure Hospital Onboarding Panel' />
                    <meta name='VRCure' content='VRCure Superadmin Panel' />
                </Helmet>
                <Nav />
                <HospitalWrapper>
                    <HospitalBackbtn to="/Allhospitals">
                        <BackI className="fas fa-arrow-left"> </BackI>

                    </HospitalBackbtn>
                    <Hospitalheading>
                        Add Hospital
                    </Hospitalheading>
                    <HospitalForm action="confirm" onSubmit={this.handleSubmit}>
                        <HospitalRow>
                            <HospitalInput
                                type="text"
                                className="inputbox"
                                value={this.state.hospitalname}
                                name="hospitalname"
                                placeholder="Hospital Name"
                                onChange={this.handleChange}
                            />
                            <HospitalError >
                                {this.state.nameError}
                            </HospitalError>


                        </HospitalRow>

                        <HospitalRow>
                            <HospitalInput
                                type="text"
                                className="inputbox"
                                value={this.state.email}
                                name="email"
                                required="true"
                                placeholder="Email Address"
                                onChange={this.handleChange}
                            />
                            <HospitalError>
                                {this.state.emailError}
                            </HospitalError>


                        </HospitalRow>
                        <HospitalRow>
                            <HospitalInput
                                type="number"
                                className="inputbox"
                                value={this.state.phone}
                                name="phone"
                                placeholder="Enter Phone Number"
                                onChange={this.handleChange}
                            />
                            <HospitalError>
                                {this.state.phoneError}
                            </HospitalError>


                        </HospitalRow>
                        <HospitalRow>
                            <HospitalInput
                                type="password"
                                className="inputbox"
                                value={this.state.password}
                                name="password"
                                placeholder="hospital login password"
                                onChange={this.handleChange}
                            />
                            <HospitalError>
                                {this.state.passwordError}
                            </HospitalError>


                        </HospitalRow>
                        <HospitalRow>
                            <HospitalInput
                                type="text"
                                className="inputbox"
                                value={this.state.place}
                                name="place"
                                placeholder="Enter Building Number/Block"
                                onChange={this.handleChange}
                            />
                            <HospitalError>
                                {this.state.placeError}
                            </HospitalError>


                        </HospitalRow>
                        <HospitalRow>
                            <HospitalInput
                                type="text"
                                className="inputbox"
                                value={this.state.Landmark}
                                name="Landmark"
                                placeholder="Enter Landmark "
                                onChange={this.handleChange}
                            />
                            <HospitalError>
                                {this.state.landmarkError}
                            </HospitalError>


                        </HospitalRow>
                        <HospitalRow>
                            <HospitalInput
                                type="text"
                                className="inputbox"
                                value={this.state.city}
                                name="city"
                                placeholder="Enter city"
                                onChange={this.handleChange}
                            />
                            <HospitalError>
                                {this.state.cityError}
                            </HospitalError>


                        </HospitalRow>
                        <HospitalRow>
                            <HospitalInput
                                type="text"
                                className="inputbox"
                                value={this.state.District}
                                name="District"
                                placeholder="Enter District "
                                onChange={this.handleChange}
                            />
                            <HospitalError>
                                {this.state.districtError}
                            </HospitalError>


                        </HospitalRow>
                        <HospitalRow>
                            <HospitalInput
                                type="text"
                                className="inputbox"
                                value={this.state.state}
                                name="state"
                                placeholder="Enter a State"
                                onChange={this.handleChange}
                            />
                            <HospitalError>
                                {this.state.stateError}
                            </HospitalError>


                        </HospitalRow>

                        <HospitalRow>
                            <HospitalInput
                                type="number"
                                className="inputbox"
                                value={this.state.pincode}
                                name="pincode"
                                placeholder="Enter a Pincode"
                                onChange={this.handleChange}
                            />
                            <HospitalError>
                                {this.state.pinError}
                            </HospitalError>
                        </HospitalRow>
                        <HospitalRow>
                            <HospitalLabel>
                                <PictureSelection
                                    type="file"
                                    name="file"
                                    accept=".jpeg, .png, .jpg"
                                    onChange={this.onChangeHandler}
                                />

                            </HospitalLabel>

                        </HospitalRow>

                        <HospitalBtnContainer>
                            <Hospitalbutton type="submit">
                                <HospitalI className="far fa-paper-plane"></HospitalI>
                                Submit
                            </Hospitalbutton>
                            <Hospitalbutton onClick={this.resetUserInputs}>
                                <HospitalI className="fas fa-power-off"></HospitalI>
                                Reset
                            </Hospitalbutton>
                        </HospitalBtnContainer>
                        {this.state.picture === undefined || this.state.picture === ""
                            ? null
                            : <HospitalImg alt="Hospital"
                                src={this.state.picture}
                            />
                        }

                    </HospitalForm>

                </HospitalWrapper>
            </AppContainer>


        );
    }
}
export default Addhospital;
