import React from 'react';
//import ReactDOM from 'react-dom';
import {
    Footer,
    FooterP,
    FooterA
} from './Elements'

class FooterScreen extends React.Component {
    render() {
        return (
            <Footer>
                <FooterP>  SMHS. © 2020 - 2021. All Rights Reserved |
                    <FooterA href="https://vrcure.blogspot.com/2020/10/vrcure-privacy-policy.html"
                        target="_blank" rel="noopener noreferrer">
                        Privacy Policy

                    </FooterA>
                </FooterP>
            </Footer>


        )
    }
}

export default FooterScreen;