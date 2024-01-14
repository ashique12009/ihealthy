import React from 'react'
import { Link } from 'react-router-dom';

const PublicHeader = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <Link to="/" className="nav-link" style={{ "color": "white" }}>iHealthy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active">Home</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default PublicHeader;