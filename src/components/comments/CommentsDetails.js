import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCommentDetails } from '../../actions/comments';

class CommentsDetails extends Component {
    componentDidMount() {
        if (this.props.selectedComment.id) {
            this.props.getCommentDetails(this.props.selectedComment.id);
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12 m12">
                        <h4>{this.props.selectedComment.details.attributes && this.props.selectedComment.details.attributes.body}</h4>
                    </div>
                    <div className="col s12 m12">
                        <div className="divider"></div>
                        <div className="section">
                            <h5>Author</h5>
                            {(this.props.selectedComment.details.relationships &&
                                this.props.selectedComment.details.relationships.author &&
                                !this.props.selectedComment.details.relationships.author.attributes) &&
                                <div className="col s12"> No author details available.</div>}
                            {this.props.selectedComment.details.relationships &&
                                this.props.selectedComment.details.relationships.author &&
                                this.props.selectedComment.details.relationships.author.attributes &&
                                <ul className="collection">
                                    <li className="collection-item">Name: {this.props.selectedComment.details.relationships.author.attributes.name}</li>
                                    <li className="collection-item">Email: {this.props.selectedComment.details.relationships.author.attributes.email}</li>
                                </ul>}
                        </div>
                        <div className="section">
                            <h5>Entry</h5>
                            {(this.props.selectedComment.details.relationships &&
                                this.props.selectedComment.details.relationships.entry &&
                                !this.props.selectedComment.details.relationships.entry.attributes) &&
                                <div className="col s12"> No entry details available.</div>}
                            {(this.props.selectedComment.details.relationships &&
                                this.props.selectedComment.details.relationships.entry &&
                                this.props.selectedComment.details.relationships.entry.attributes) &&
                                <ul className="collection">
                                    <li className="collection-item">Headline: {this.props.selectedComment.details.relationships.entry.attributes.headline}</li>
                                    <li className="collection-item">Body: {this.props.selectedComment.details.relationships.entry.attributes.bodyText}</li>
                                    <li className="collection-item">Published date: {this.props.selectedComment.details.relationships.entry.attributes.pubDate}</li>
                                    <li className="collection-item">Last modified date: {this.props.selectedComment.details.relationships.entry.attributes.modDate}</li>
                                </ul>}
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
        selectedComment: {
            id: state.selectedComment.id,
            details: state.selectedComment.details
        }
    };
}

export default connect(mapStateToProps, { getCommentDetails })(CommentsDetails);