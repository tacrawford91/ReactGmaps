import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import CheckboxWindow from './checkboxWindow';
import CheckboxWrapper from './checkboxWrapper';
 

 
const KEYS_TO_FILTERS = ['name', 'address', 'city', 'state', 'zip_code', 'country', 'longitude', 'latitude', 'id']
// const KEYS_TO_FILTERS = ['name']
 
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      
    }
    this.searchUpdated = this.searchUpdated.bind(this)

  }
 
  render () {
    const filteredLocations = this.props.locations.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    console.log('filtered', filteredLocations);
    const activeDisplay = filteredLocations.reduce((locations, { name, address, city, state, zip_code, country, longitude, latitude, id  }) => {
      if (!locations[state]) locations[state] = [];
      locations[state].push({name, address, city, state, zip_code, country, longitude, latitude, id});
      return locations;
      }, {});

    return (
      <div>
        {console.log(activeDisplay)}
        <SearchInput className="search-input" onChange={this.searchUpdated} />
          {Object.keys(activeDisplay).map((locationState) => { 
              return (
                  <CheckboxWrapper
                      key={locationState}  
                      stateName={locationState} 
                      localLocations={activeDisplay[locationState]}
                      toggleLocation={this.props.toggleLocation} 
                      stateSelectAll={this.props.stateSelectAll}
                      stateDeSelectAll={this.props.stateDeSelectAll} 
                      selected = {this.props.selected}
                  />
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
 