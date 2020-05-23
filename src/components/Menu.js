import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">                    
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                        <a href="#" className="nav-link">                            
                            Simple Link1
                        </a>
                        </li>
                    </ul>
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                        <a href="#" className="nav-link">                            
                            Simple Link2
                        </a>
                        </li>
                    </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
                </aside>

            </div>
        )
    }
}
