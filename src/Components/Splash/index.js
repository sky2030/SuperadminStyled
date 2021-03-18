import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SmhsLogo from "../Images/Smhs_Logo.png";
import pointer from "../Images/pointer.png";
import { Helmet } from 'react-helmet';

import {
    SplashBg,
    SplashImg,
    SplashLink,
    SplashPointer,
    PointerImg
} from './Elements'

function Splash() {
    useEffect(() => {
        localStorage.removeItem("token");
    }, []);

    return (
        <SplashLink to="/Login">
            <Helmet>
                <meta charSet="utf-8" />
                <title>VRCure Admin</title>
                <meta name='description' content='VRCure Admin Portal' />
                <meta name='VRCure' content='VRCure Superadmin Panel' />
            </Helmet>

            <SplashBg>
                <SplashImg src={SmhsLogo} alt="Motherson Group" />
                <SplashPointer>
                    <PointerImg
                        alt="CLick"
                        src={pointer}
                        className="vert-move"
                    />
                </SplashPointer>
            </SplashBg>
        </SplashLink>


    );
}

export default Splash;
