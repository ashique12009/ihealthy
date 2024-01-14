import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const userMenu = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: 'ri-home-line'
        },
        {
            name: 'Appointments',
            path: '/appointments',
            icon: 'ri-file-list-line'
        },
        {
            name: 'Apply Doctor',
            path: '/apply-doctor',
            icon: 'ri-hospital-line'
        },
        {
            name: 'Profile',
            path: '/profile',
            icon: 'ri-user-line'
        }
    ];

    const menuToBeRendered = userMenu;

    return (
        <div className="main">
            <div className="d-flex layout">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h1>iHealthy</h1>
                    </div>

                    <div className="menu">
                        {
                            menuToBeRendered.map((menu) => {
                                const isActive = location.pathname === menu.path;

                                return <div key={menu.name} className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                                    <i className={menu.icon}></i>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </div>
                            })
                        }
                        <div className="d-flex menu-item" onClick={() => {localStorage.clear(); navigate('/login');}}>
                            <i className="ri-logout-box-r-line"></i>
                            <Link to="/logout">Logout</Link>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        header
                    </div>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;