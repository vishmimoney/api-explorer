import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getComments, setSelectedComment } from '../../actions/comments';
import Pagination from '../pagination';
class CommentsList extends Component {
    componentDidMount() {
        const defaultPageNumber = 1;
        this.props.getComments(defaultPageNumber);
    };

    handleCommentSelection(id) {
        this.props.setSelectedComment(id);
    }

    handlePageSelection(pageNum) {
        this.props.getComments(pageNum);
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12 m12">
                        <h4>Comments</h4>
                    </div>
                    <div className="col s12 m12">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Comment</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.props.comments.data && this.props.comments.data.map((comment, i) => {
                                        return (
                                            <tr key={i}>
                                                <td><Link to={`/comments/${comment.id}?format=vnd.api%2Bjson`} onClick={this.handleCommentSelection.bind(this, comment.id)}>{comment.id}</Link></td>
                                                <td>{comment.attributes.body}</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <Pagination
                        currentPage={this.props.comments.currentPage}
                        pageCount={this.props.comments.pageCount}
                        pageSelect={this.handlePageSelection.bind(this)}>
                    </Pagination>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    };
}

export default connect(mapStateToProps, { getComments, setSelectedComment })(CommentsList);