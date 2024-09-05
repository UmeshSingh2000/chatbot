import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-white border">
            <div className="container-fluid gap-5">
                <a className="navbar-brand" href="#">
                    <img src="https://www.tmu.ac.in/monaco/assets/image/logo.png" alt="" style={{ height: '100px' }} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={navLinkStyle}>
                                NEP 2020
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navLinkStyle}>
                                IQAC
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={navButtonStyle}
                            >
                                Events
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                        Past Events
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                        Media Coverage
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navLinkStyle}>
                                Center for Distance and Online Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navLinkStyle}>
                                Infrastructure
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navLinkStyle}>
                                Blogs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navLinkStyle}>
                                ERP LOGIN
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navLinkStyle}>
                                Alumni
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item dropdown">
                                <button
                                    className="btn dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={navButtonStyle}
                                >
                                    Quick Links
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            CTLD
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            IIC
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            Grievances Portal
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            Research & Development Center
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            Disciplinary Rules
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            Admission & Refund Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            Anti-Ragging Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            University Academic Calender
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            University Sport Calender
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            NSS Unit
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            Convocation
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            IQAC
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" style={dropdownItemStyle}>
                                            Vaccination Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Styles
const navLinkStyle = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#FE8D00',
    position: 'relative',
    top: '-30px',
};

const navButtonStyle = {
    ...navLinkStyle,
    backgroundColor: 'transparent',
    border: 'none',
};

const dropdownItemStyle = {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#FE8D00',
};

export default Navbar;
