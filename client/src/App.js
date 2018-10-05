import React, { Component } from 'react';
import './App.css';
import MapContainer from './Components/map'
import LocationData from './locations.json';
import CheckboxWindow from './Components/checkboxWindow';
import Search from './Components/search';



class App extends Component {
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
        customerStates: [...new Set(LocationData.map(location => location.state))]
      }
    }
    
    toggleLocation = (locationID) => {
      if (this.state.selected.filter((selected) => selected.id === locationID).length === 0 ) {
        this.setState({selected: [...this.state.selected, LocationData.find((location) => location.id === locationID)]})
      } else {
        this.setState({selected: this.state.selected.filter((selected) => selected.id !== locationID)})
      }
    }

    stateSelectAll = (selectedState) => {
      this.setState({selected: [...this.state.selected,...this.state.locations.filter((location) => location.state === selectedState)]});
    }
    stateDeSelectAll = (deSelectedState) => {
      let updated = this.state.selected.filter((location) => location.state !== deSelectedState);
      this.setState({selected: updated});
    }

  render() {
    return (
      <div className="App">
      <div className='row'>
        <div className='col-md-6'>
          <Search customerStates={this.state.customerStates} locations={this.state.locations} toggleLocation= {this.toggleLocation} selected={this.state.selected} stateSort={this.state.stateSort} stateSelectAll={this.stateSelectAll} stateDeSelectAll={this.stateDeSelectAll}/>
          {/* <CheckboxWindow locations={this.state.locations} toggleLocation= {this.toggleLocation} selected={this.state.selected} stateSort={this.state.stateSort} stateSelectAll={this.stateSelectAll} stateDeSelectAll={this.stateDeSelectAll}/> */}
        </div>
        <div className='col-md-6'>
          <MapContainer locations ={this.state.locations} selected={this.state.selected}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
