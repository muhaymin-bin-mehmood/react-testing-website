import React from 'react';
import Logo from '../../images/logo.png';
import './header.css';
import Button from '../button/Button';

const Header = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={Logo}></img></a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Key Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Testiminial</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <Button title="Try for free"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;

