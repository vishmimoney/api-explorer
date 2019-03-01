import React, { Component } from "react";

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
                                <li><a href="#/">Blogs</a></li>
                                <li><a href="#/">Entries</a></li>
                                <li><a href="#/">Authors</a></li>
                                <li><a href="#/">Comments</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;