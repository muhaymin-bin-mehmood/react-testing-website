import React from 'react';
import Logo from '../../images/logo.png';
import './header.css';
import Button from '../button/Button';

const Header = () => {
    return (
        <>
            <div className="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={Logo}></img></a>
                        <div class="collapse navbar-collapse">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Key Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Testiminial</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">FAQ</a>
                                </li>
                                <li class="nav-item">
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

