import React, { Component } from "react";
import { connect } from 'react-redux';
import { getBlogs } from '../../actions/blogs';

class BlogsList extends Component {
    componentDidMount() {
        this.props.getBlogs();
    };
    
    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12 m12">
                        <h4>Blogs</h4>
                    </div>
                    <div className="col s12 m12">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                </tr>
                            </thead>

                            <tbody>
                            {
                                this.props.blogs && this.props.blogs.map((blog , i) => {
                                return ( 
                                    <tr key={i}>
                                        <td>{blog.id}</td>
                                        <td>{blog.attributes.name}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <ul className="pagination">
                        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active grey darken-2"><a href="#!">1</a></li>
                        <li><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    };
}

export default connect(mapStateToProps, { getBlogs })(BlogsList);