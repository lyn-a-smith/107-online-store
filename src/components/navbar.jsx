import { Link } from "react-router";

import { useState, useContext } from "react";
import GlobalContext from "../state/globalContext";

import { IconUserCircle, IconHome } from '@tabler/icons-react';
import "./navbar.css";

function Navbar() {
    const user = useContext(GlobalContext).user

    return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-secondary" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            Online-Store
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
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                        <IconHome stroke={2} /> Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/catalog">
                        Catalog
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin">
                        Admin
                    </Link>
                </li>                    
            </ul>
            </div>
            <div className="text-white"><IconUserCircle stroke={2} />  {user.name} - {user.cohort}</div>
        </div>
    </nav>

    )
}

export default Navbar;