import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './Components/map'
import ListWindow from './Components/listWindow';
import LocationData from './locations.json';
import CheckboxWindow from './Components/checkboxWindow';



class App extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        Rawlocations: LocationData,
        locations:  LocationData.sort((a,b) => a.state.localeCompare(b.state)).map(location => ({...location, selected: 1})),
        unselected: [],
        selected: ['0'],
        stateSort: LocationData.reduce((locations, { name, address, city, state, zip_code, country, longitude, latitude, id  }) => {
          if (!locations[state]) locations[state] = [];
          locations[state].push({name, address, city, state, zip_code, country, longitude, latitude, id});
          return locations;
        }, {})

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
      let updated = [this.state.selected,... this.state.locations.filter((location) => location.state === selectedState)]
      this.setState({selected: updated});
  
    }

  render() {
    return (
      <div className="App">
      <div className='row'>
        <div className='col-md-6'>
          {/* <ListWindow locations={this.state.locations} toggleLocation= {this.toggleLocation} selected={this.state.selected} stateSort={this.state.stateSort} stateSelectAll={this.stateSelectAll}/> */}
          <CheckboxWindow locations={this.state.locations} toggleLocation= {this.toggleLocation} selected={this.state.selected} stateSort={this.state.stateSort} stateSelectAll={this.stateSelectAll}/>
        </div>
        <div className='col-md-6'>
          <MapContainer locations ={this.state.locations} unselected={this.state.unselected} selected={this.state.selected}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
