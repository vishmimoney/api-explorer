import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEntries, setSelectedEntry } from '../../actions/entries';
import Pagination from '../pagination';
class EntriesList extends Component {
    componentDidMount() {
        const defaultPageNumber = 1;
        this.props.getEntries(defaultPageNumber);
    };

    handleEntrySelection(id) {
        this.props.setSelectedEntry(id);
    }

    handlePageSelection(pageNum) {
        this.props.getEntries(pageNum);
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12 m12">
                        <h4>Entries</h4>
                    </div>
                    <div className="col s12 m12">
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
                                    this.props.entries.data && this.props.entries.data.map((entry, i) => {
                                        return (
                                            <tr key={i}>
                                                <td><Link to={`/entries/${entry.id}?format=vnd.api%2Bjson`} onClick={this.handleEntrySelection.bind(this, entry.id)}>{entry.id}</Link></td>
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
                <div className="row">
                    <Pagination
                        currentPage={this.props.entries.currentPage}
                        pageCount={this.props.entries.pageCount}
                        pageSelect={this.handlePageSelection.bind(this)}>
                    </Pagination>
                </div>
            </>
        );
    }
}

EntriesList.propTypes = {
    entries: PropTypes.object.isRequired,
    getEntries: PropTypes.func
}

EntriesList.defaultProps = {
    entries: {}
}

const mapStateToProps = (state) => {
    return {
        entries: state.entries
    };
}

export default connect(mapStateToProps, { getEntries, setSelectedEntry })(EntriesList);