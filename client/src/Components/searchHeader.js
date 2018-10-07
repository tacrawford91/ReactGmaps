import React from 'react';

import SearchInput from 'react-search-input';


class SearchHeader extends React.Component {
    render() {
        return (
            <div>
                <div className='searchWrapper'>
                    <h3>Select Locations</h3>
                    <button className='btn addBtn' onClick={() => this.props.showInfo()}>Add</button>
                    <button className='btn cancelBtn' onClick={() => this.props.hideInfo()}>Cancel</button>
                    <br />
                    <SearchInput className="search-input" onChange={(term) => this.props.searchHandler(term)} />
                    <div className='selectDiv'>
                        <a>Show Selected</a>({this.props.selected.length})
                        <a onClick={() => this.props.selectAll()}>Select All</a> / <a onClick={() => this.props.deSelectAll()}>  Deselect All</a> 
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchHeader
