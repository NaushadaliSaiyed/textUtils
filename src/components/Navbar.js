import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === "light" ? "white" : "black"}`}
        >
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/" style={{ color: props.mode === "light" ? "black" : "white" }}>{props.title}</Link> */}
                <a className="navbar-brand" href="#" style={{ color: props.mode === "light" ? "black" : "white" }}>{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/" style={{ color: props.mode === "light" ? "black" : "white" }}>TextForm</Link> */}
                            <a className="nav-link" href="#" style={{ color: props.mode === "light" ? "black" : "white" }}>TextForm</a>
                        </li>
                        {/* <li className="nav-item"> */}
                            {/* <Link className="nav-link" to="/about" style={{ color: props.mode === "light" ? "black" : "white" }}>{props.aboutText}</Link> */}
                            {/* <a className="nav-link" href="/about" style={{ color: props.mode === "light" ? "black" : "white" }}>{props.aboutText}</a> */}
                        {/* </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                    <div>
                        <button onClick={props.toggleGrayMode} className="btn btn-secondary mx-2">Gray</button>
                        <button onClick={props.toggleSuccessMode} className="btn btn-success mx-2">Green</button>
                        <button onClick={props.toggleDangerMode} className="btn btn-danger mx-2">Red</button>
                        <button onClick={props.toggleWarningMode} className="btn btn-warning mx-2">Yellow</button>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input checked={props.mode === "light" ? false : true} className="form-check-input" onChange={props.toggleMode} type="checkbox" role="switch" id={`flexSwitchCheckDefault`} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enable DarkMode" : "Enable LightMode"}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Set Title here",
    aboutText: "About us"
}
