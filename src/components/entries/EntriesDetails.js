import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEntryDetails } from '../../actions/entries';

class EntriesDetails extends Component {
    componentDidMount() {
        if (this.props.selectedEntry.id) {
            this.props.getEntryDetails(this.props.selectedEntry.id);
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12 m12">
                        <h4>{this.props.selectedEntry.details.attributes && this.props.selectedEntry.details.attributes.name}</h4>
                    </div>
                    <div className="col s12 m12">
                        <div className="divider"></div>
                        <div className="section">
                            <h5>Authors</h5>
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
                                        this.props.selectedEntry.details.relationships &&
                                        this.props.selectedEntry.details.relationships.authors &&
                                        this.props.selectedEntry.details.relationships.authors.map((author, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{author.id}</td>
                                                    <td>{author.attributes.name}</td>
                                                    <td>{author.attributes.email}</td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                        <div className="section">
                            <div className="section">
                                <h5>Comments</h5>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Comment</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.props.selectedEntry.details.relationships &&
                                            this.props.selectedEntry.details.relationships.comments &&
                                            this.props.selectedEntry.details.relationships.comments.map((comment, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{comment.id}</td>
                                                        <td>{comment.attributes.body}</td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="section">
                            <h5>Blog</h5>
                            {(this.props.selectedEntry.details.relationships &&
                                this.props.selectedEntry.details.relationships.blog &&
                                !this.props.selectedEntry.details.relationships.blog.attributes) &&
                                <div className="col s12"> No blog details available.</div>}
                            {(this.props.selectedEntry.details.relationships &&
                                this.props.selectedEntry.details.relationships.blog &&
                                this.props.selectedEntry.details.relationships.blog.attributes) &&
                                <ul className="collection">
                                    <li className="collection-item">Id : {this.props.selectedEntry.details.relationships.blog.id}</li>
                                    <li className="collection-item">Name : {this.props.selectedEntry.details.relationships.blog.attributes.name}</li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
        ;
    }
}

const mapStateToProps = (state) => {
    return {
        selectedEntry: {
            id: state.selectedEntry.id,
            details: state.selectedEntry.details
        }
    };
}

export default connect(mapStateToProps, { getEntryDetails })(EntriesDetails);