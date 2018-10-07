import React from 'react'


import CheckboxWrapper from './checkboxWrapper';
import SearchInput, { createFilter } from 'react-search-input'



const KEYS_TO_FILTERS = ['name', 'address', 'city', 'state', 'zip_code', 'country', 'longitude', 'latitude', 'id']
// const KEYS_TO_FILTERS = ['name']

class SearchHeader extends React.Component {

    render() {
        return (
            <div>
                <div className='searchWrapper'>
                    <SearchInput className="search-input" onChange={(term) => this.props.searchHandler(term)} />
                </div>
            </div>
        )
    }
}
export default SearchHeader
