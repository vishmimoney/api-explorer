import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m12">
                    <h2>API Explorer</h2>
                </div>
                <div className="col s6 m12">
                    <nav>
                        <div className="nav-wrapper grey darken-2">
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><Link to="/">Blogs</Link>></li>
                                <li><Link to="/entries">Entries</Link>></li>
                                <li><Link to="/authors">Authors</Link>></li>
                                <li><Link to="/comments">Comments</Link>></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;