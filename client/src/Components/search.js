import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import CheckboxWindow from './checkboxWindow';
import CheckboxWrapper from './checkboxWrapper';
 

 
// const KEYS_TO_FILTERS = ['name', 'address', 'city', 'state', 'zip_code', 'country', 'longitude', 'latitude', 'id']
const KEYS_TO_FILTERS = ['state']
 
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    const filteredLocations = this.props.locations.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        
        {filteredLocations.map(location => {
          return (
            <div className="mail" key={location.id}>
              <div className="from">{location.name}</div>
              <div className="subject">{location.state}</div>
            </div>
          )

        })}
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}
export default Search
 