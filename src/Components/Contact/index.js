import React from "react";
import contactImg from '../Images/contact2.jpg';
import { Redirect } from "react-router-dom";
import Navigation from '../../Pages'
import Nav from '../Nav'
import { AppContainer } from '../Style';
import { Helmet } from 'react-helmet'
import {
    ContactWrapper,
    ContactBanner,
    ContactItem,
    ContactHeader,
    ContactTitle,
    ContactImg,
    ContactI
} from './Elements';

class Myhospital extends React.Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");

        let LoggedIn = true;
        if (token == null) {
            LoggedIn = false;
        }
        this.state = {
            email: "",
            password: "",
            token: "",
            LoggedIn,
        };
    }
    render() {
        if (localStorage.getItem("token") == null) {
            return <Redirect to="/splash" />;
        }
        return (
            <AppContainer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>VRCure Support</title>
                    <meta name='description' content='VRCure Admin Portal Support' />
                    <meta name='VRCure' content='VRCure Superadmin Panel' />
                </Helmet>
                <Nav />
                <ContactWrapper>
                    <ContactBanner>
                        <ContactImg src={contactImg} alt='Contact' />

                        <ContactItem>
                            <ContactHeader>
                                Application Support
                            </ContactHeader>
                            <ContactTitle>
                                <ContactI className="far fa-envelope"></ContactI>
                                connect@smhs.motherson.com
                            </ContactTitle>
                            <ContactTitle>
                                <ContactI className="fas fa-phone-alt"></ContactI>
                                0120-4365125
                            </ContactTitle>
                        </ContactItem>
                    </ContactBanner>
                </ContactWrapper>
            </AppContainer>

        );
    }
}
export default Myhospital;
