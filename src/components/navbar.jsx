import "./navbar.css";

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg bg-info-subtle">
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
                <a className="nav-link" aria-current="page" href="#">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    About
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Contact
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link">Catelog</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>

    )
}

export default Navbar;