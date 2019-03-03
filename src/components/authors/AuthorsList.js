import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthors, setSelectedAuthor } from '../../actions/authors';
import Pagination from '../pagination';

class AuthorsList extends Component {
    componentDidMount() {
        const defaultPageNumber = 1;
        this.props.getAuthors(defaultPageNumber);
    };

    handleAuthorSelection(id) {
        this.props.setSelectedAuthor(id);
    }

    handlePageSelection(pageNum) {
        this.props.getAuthors(pageNum);
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12 m12">
                        <h4>Authors</h4>
                    </div>
                    <div className="col s12 m12">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.props.authors.data && this.props.authors.data.map((author, i) => {
                                        return (
                                            <tr key={i}>
                                                <td><Link to={`/authors/${author.id}?format=vnd.api%2Bjson`} onClick={this.handleAuthorSelection.bind(this, author.id)}>{author.id}</Link></td>
                                                <td>{author.attributes.name}</td>
                                                <td>{author.attributes.email}</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <Pagination
                        currentPage={this.props.authors.currentPage}
                        pageCount={this.props.authors.pageCount}
                        pageSelect={this.handlePageSelection.bind(this)}>
                    </Pagination>
                </div>
            </>
        );
    }
}

AuthorsList.propTypes = {
    authors: PropTypes.object.isRequired,
    getAuthors: PropTypes.func
}

AuthorsList.defaultProps = {
    authors: {}
}

const mapStateToProps = (state) => {
    return {
        authors: state.authors
    };
}

export default connect(mapStateToProps, { getAuthors, setSelectedAuthor })(AuthorsList);