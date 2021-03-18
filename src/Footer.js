import React from 'react';
//import ReactDOM from 'react-dom';
import './dashboard/dashboard.css';

class Footer extends React.Component {
	render() {
		return (

			<footer>
				<p>  SMHS. © 2020 - 2021. All Rights Reserved |
                <a href="https://vrcure.blogspot.com/2020/10/vrcure-privacy-policy.html" target="_blank" rel="noopener noreferrer"
						style={{ color: 'white', textDecoration: 'none', marginLeft: '5px' }}>
						Privacy Policy </a> </p>
			</footer>

		)
	}
}

export default Footer;