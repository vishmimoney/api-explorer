import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBlogs, setSelectedBlog } from '../../actions/blogs';
import Pagination from '../pagination';

class BlogsList extends Component {
    componentDidMount() {
        const defaultPageNumber = 1;
        this.props.getBlogs(defaultPageNumber);
    };

    handleBlogSelection(id) {
        this.props.setSelectedBlog(id);
    }

    handlePageSelection(pageNum) {
        this.props.getBlogs(pageNum);
    }

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
                                    this.props.blogs.data && this.props.blogs.data.map((blog, i) => {
                                        return (
                                            <tr key={i}>
                                                <td><Link to={`/blogs/${blog.id}?format=vnd.api%2Bjson`} onClick={this.handleBlogSelection.bind(this, blog.id)}>{blog.id}</Link></td>
                                                <td>{blog.attributes.name}</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <Pagination
                        currentPage={this.props.blogs.currentPage}
                        pageCount={this.props.blogs.pageCount}
                        pageSelect={this.handlePageSelection.bind(this)}>
                    </Pagination>

                </div>
            </>
        );
    }
}

BlogsList.propTypes = {
    blogs: PropTypes.object.isRequired,
    getblogs: PropTypes.func
}

BlogsList.defaultProps = {
    blogs: {}
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    };
}

export default connect(mapStateToProps, { getBlogs, setSelectedBlog })(BlogsList);