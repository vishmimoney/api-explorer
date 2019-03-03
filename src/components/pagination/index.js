import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.handlePageSelect = this.handlePageSelect.bind(this);
    }

    handlePageSelect(pageNum) {
        this.props.pageSelect(pageNum);
    }


    render() {
        /*  set prev chevron as active if currentPage is not the first page,
            set onClick function only for the ative chevron */
        const leftChevron = this.props.currentPage <= 1
            ? <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            : <li className="waves-effect"><a href="#!" onClick={this.handlePageSelect.bind(this, this.props.currentPage - 1)}><i className="material-icons">chevron_left</i></a></li>;

        // set active class to current page    
        const currenPageNum = <li className="active grey darken-2"><a href="#!">{this.props.currentPage}</a></li>;

        /*  set as active next chevron if currentPage is not the last page,
            set onClick function only for the ative chevron */
        const rightChevron = this.props.currentPage >= this.props.pageCount
            ? <li className="disabled"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            : <li className="waves-effect"><a href="#!" onClick={this.handlePageSelect.bind(this, this.props.currentPage + 1)}><i className="material-icons">chevron_right</i></a></li>


        return (
            <ul className="pagination" >
                {leftChevron}
                {currenPageNum}
                {rightChevron}
            </ul>
        );
    }
}

export default Pagination;