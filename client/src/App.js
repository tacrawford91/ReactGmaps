import React from 'react';

import CheckboxWindow from './Components/checkboxWindow';
import LocationData from './locations.json';
import MapContainer from './Components/map'
import Search from './Components/search';
import SearchHeader from './Components/searchHeader';
import styles from './App.css';

class App extends React.Component {
    constructor(props) {
      super(props) 
      this.state = {
        Rawlocations: LocationData,
        locations:  LocationData.sort((a,b) => a.state.localeCompare(b.state)).map(location => ({...location, selected: 1})),
        selected: [],
        stateSort: LocationData.reduce((locations, { name, address, city, state, zip_code, country, longitude, latitude, id  }) => {
          if (!locations[state]) locations[state] = [];
          locations[state].push({name, address, city, state, zip_code, country, longitude, latitude, id});
          return locations;
          }, {}),
        customerStates: [...new Set(LocationData.map(location => location.state))],
        searchTerm: ''
      }
    }
    
    searchHandler = (term) => {
      this.setState({ searchTerm: term });
    }
    stateSelectAll = (selectedState) => {
      this.setState({selected: [...this.state.selected,...this.state.locations.filter((location) => location.state === selectedState)]});
    }
    stateDeSelectAll = (deSelectedState) => {
      let updated = this.state.selected.filter((location) => location.state !== deSelectedState);
      this.setState({selected: updated});
    }
    
    toggleLocation = (locationID) => {
      if (this.state.selected.filter((selected) => selected.id === locationID).length === 0 ) {
        this.setState({selected: [...this.state.selected, LocationData.find((location) => location.id === locationID)]})
      } else {
        this.setState({selected: this.state.selected.filter((selected) => selected.id !== locationID)})
      }
    }
    render() {
    return (
      <section className={  styles.app  }>
        <SearchHeader
          searchHandler={  this.searchHandler }
          />
        <div className='mainWrapper'>
          <div className='dataWrapper'>
            <Search 
              customerStates={  this.state.customerStates  } 
              locations={  this.state.locations  } 
              searchTerm = {  this.state.searchTerm  }
              selected={  this.state.selected  } 
              stateDeSelectAll={  this.stateDeSelectAll  }
              stateSelectAll={  this.stateSelectAll  } 
              stateSort={  this.state.stateSort  } 
              toggleLocation= {  this.toggleLocation  } 
              />
          </div>
          {/* <CheckboxWindow locations={this.state.locations} toggleLocation= {this.toggleLocation} selected={this.state.selected} stateSort={this.state.stateSort} stateSelectAll={this.stateSelectAll} stateDeSelectAll={this.stateDeSelectAll}/> */}
          <div className='mapWrapper'>
            <MapContainer 
              locations ={  this.state.locations  } 
              selected={  this.state.selected}  
              />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
