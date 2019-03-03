import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBlogDetails } from '../../actions/blogs';

class BlogsDetails extends Component {
    componentDidMount() {
        if (this.props.selectedBlog.id) {
            this.props.getBlogDetails(this.props.selectedBlog.id);
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12 m12">
                        <h4>Blog ID: {this.props.selectedBlog.id}</h4>
                        {this.props.selectedBlog.details.attributes &&
                            <div>Name: {this.props.selectedBlog.details.attributes.name}</div>
                        }
                    </div>
                    <div className="col s12 m12">
                        <div className="divider"></div>
                        <div className="section">
                            <h5>Tags</h5>
                            <ul className="collection">
                                {this.props.selectedBlog.details.relationships &&
                                    this.props.selectedBlog.details.relationships.tags && this.props.selectedBlog.details.relationships.tags.length === 0 &&
                                    <div className="col s12"> No tags available.</div>}
                                {this.props.selectedBlog.details.relationships &&
                                    this.props.selectedBlog.details.relationships.tags &&
                                    this.props.selectedBlog.details.relationships.tags.map((tag, i) => {
                                        return (<li className="collection-item">tag</li>);
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedBlog: {
            id: state.selectedBlog.id,
            details: state.selectedBlog.details
        }
    };
}

export default connect(mapStateToProps, { getBlogDetails })(BlogsDetails);