import React from 'react'


import CheckboxWrapper from './checkboxWrapper';
import SearchInput, {createFilter} from 'react-search-input'
 

 
const KEYS_TO_FILTERS = ['name', 'address', 'city', 'state', 'zip_code', 'country', 'longitude', 'latitude', 'id']
// const KEYS_TO_FILTERS = ['name']
 
class Search extends React.Component {
  render () {
    const filteredLocations = this.props.locations.filter(createFilter(this.props.searchTerm, KEYS_TO_FILTERS))
    const activeDisplay = filteredLocations.reduce((locations, { name, address, city, state, zip_code, country, longitude, latitude, id  }) => {
      if (!locations[state]) locations[state] = [];
      locations[state].push({name, address, city, state, zip_code, country, longitude, latitude, id});
      return locations;
      }, {});

    return (
          <div className='stateWrapper'>
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
 