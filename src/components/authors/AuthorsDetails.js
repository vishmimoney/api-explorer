import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthorDetails } from '../../actions/authors';


class AuthorsDetails extends Component {
    componentDidMount() {
        if (this.props.selectedAuthor.id) {
            this.props.getAuthorDetails(this.props.selectedAuthor.id)
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12 m12">
                        <h4>Author ID: {this.props.selectedAuthor.id}</h4>
                        {this.props.selectedAuthor.details.attributes &&
                            <>
                                <div>Name: {this.props.selectedAuthor.details.attributes.name}</div>
                                <div>Email: {this.props.selectedAuthor.details.attributes.email}</div>
                            </>
                        }
                    </div>
                    <div className="col s12 m12">
                        <div className="divider"></div>
                        <div className="section">
                            <h5>Comments</h5>
                            {this.props.selectedAuthor.details.relationships &&
                                this.props.selectedAuthor.details.relationships.comments &&
                                this.props.selectedAuthor.details.relationships.comments.length === 0 &&
                                <div className="col s12"> No comments available.</div>}
                            {this.props.selectedAuthor.details.relationships &&
                                this.props.selectedAuthor.details.relationships.comments &&
                                this.props.selectedAuthor.details.relationships.comments.map((comment, i) => {
                                    return (<li className="collection-item" key={i}>{comment.attributes.body}</li>);
                                })}
                        </div>
                        <div className="section">
                            <h5>Entries</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Headline</th>
                                        <th>Body</th>
                                        <th>Published Date</th>
                                        <th>Modified Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.props.selectedAuthor.details.relationships &&
                                        this.props.selectedAuthor.details.relationships.entries &&
                                        this.props.selectedAuthor.details.relationships.entries.map((entry, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{entry.id}</td>
                                                    <td>{entry.attributes.headline}</td>
                                                    <td>{entry.attributes.bodyText}</td>
                                                    <td>{entry.attributes.pubDate}</td>
                                                    <td>{entry.attributes.modDate}</td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
        ;
    }
}

AuthorsDetails.propTypes = {
    selectedAuthor: PropTypes.object.isRequired,
    getAuthorDetails: PropTypes.func.isRequired
}

AuthorsDetails.defaultProps = {
    selectedAuthor: {}
}

const mapStateToProps = (state) => {
    return {
        selectedAuthor: {
            id: state.selectedAuthor.id,
            details: state.selectedAuthor.details
        }
    };
}

export default connect(mapStateToProps, { getAuthorDetails })(AuthorsDetails);