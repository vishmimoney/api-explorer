import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthors, setSelectedAuthor } from '../../actions/authors';

class AuthorsList extends Component {
    componentDidMount() {
        this.props.getAuthors();
    };

    handleAuthorSelection(id) {
        this.props.setSelectedAuthor(id);
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
                                    this.props.authors && this.props.authors.map((author, i) => {
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
        authors: state.authors
    };
}

export default connect(mapStateToProps, { getAuthors, setSelectedAuthor })(AuthorsList);