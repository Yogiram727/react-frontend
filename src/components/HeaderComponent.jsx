import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
            <header>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container text-center"> {/* Adding container and text-center class */}
                        <a href="http://localhost:3000/employees" className="navbar-brand">
                            <span style={{ fontSize: '24px' }}>Employee Management </span> {/* Applying inline style for font size */}
                        </a>
                    </div>
                </nav>
            </header>
        </div>
        );
    }
}

export default HeaderComponent;