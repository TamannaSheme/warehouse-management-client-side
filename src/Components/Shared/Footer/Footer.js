// Footer JS Added


import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram

} from '@fortawesome/free-brands-svg-icons'
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 left-corner">
                        <h3 className='text-center mt-5'> About </h3>
                        <p> The decibel is a relative unit of measurement equal to one tenth of a bel. It expresses the ratio of two values of a power or root-power quantity on a logarithmic scale.  </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 middle-corner">
                        <h3 className='text-center mt-5'> Quick Link </h3>
                        <Link to='/Home'> Home </Link>
                        <Link to='/Product'> Product </Link>
                        <Link to='/About'> About us </Link>
                        <Link to='/Contact'> Contact </Link>
                        <Link to='/Login'> Login </Link>
                        <Link to='/Register'> Register </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 right-corner">
                        <h3 className='text-center mt-5'> Follow us with </h3>
                        <div className="social-icons">
                            <Link to='/https://youtube.com'>  <FontAwesomeIcon icon={faYoutube} size="2x" /> </Link>
                            <Link to='/https://facebook.com'>  <FontAwesomeIcon icon={faFacebook} size="2x" /> </Link>
                            <Link to='/https://twitter.com'>  <FontAwesomeIcon icon={faTwitter} size="2x" /> </Link>
                            <Link to='/https://instagram.com'>  <FontAwesomeIcon icon={faInstagram} size="2x" /> </Link>
                        </div>
                        <input className='email-field' type="email" name="email" id="" placeholder='E-mail' />
                        <input className='subx-btn' type="submit" value="Subscribe us" />
                    </div>
                </div>
                <div className="copy-right">
                    <h5 className='text-center'> Copyright @ 2022 developer SS </h5>
                </div>
            </div>

        </div>
    );
};

export default Footer;
