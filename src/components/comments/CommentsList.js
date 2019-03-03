import React, { Component } from 'react';
import { Link } from  'react-router-dom';
import { connect } from 'react-redux';
import { getComments, setSelectedComment } from '../../actions/comments';
class CommentsList extends Component {
    componentDidMount() {
        this.props.getComments();
    };

    handleCommentSelection(id) {
        this.props.setSelectedComment(id);
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
                                this.props.comments && this.props.comments.map((comment , i) => {
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
        comments: state.comments
    };
}

export default connect(mapStateToProps, { getComments, setSelectedComment })(CommentsList);