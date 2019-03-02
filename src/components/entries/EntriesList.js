import React, { Component } from "react";
import { connect } from 'react-redux';
import { getEntries } from '../../actions/entries';
class EntriesList extends Component {
    componentDidMount() {
        this.props.getEntries();
    };

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
                                this.props.entries && this.props.entries.map((entry , i) => {
                                return ( 
                                    <tr key={i}>
                                        <td>{entry.id}</td>
                                        <td>{entry.attributes.headline}</td>
                                        <td>{entry.attributes.bodyText}</td>
                                        <td>{entry.attributes.modDate}</td>
                                        <td>{entry.attributes.pubDate}</td>
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
        entries: state.entries
    };
}

export default connect(mapStateToProps, { getEntries })(EntriesList);