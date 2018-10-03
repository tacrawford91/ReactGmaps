import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './Components/map'
import ListWindow from './Components/listWindow';
import LocationData from './locations.json';
import _ from 'lodash';



class App extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        Rawlocations: LocationData,
        locations:  LocationData.sort((a,b) => a.state.localeCompare(b.state))
        .map(location => ({...location, selected: 1})),
      }
    }
    
    // componentDidMount() {
    //   const sortedAndSelected = LocationData.sort((a,b) => a.state.localeCompare(b.state)).forEach((location) => location.selected=1);
    //   this.setState({locations: sortedAndSelected})      
    // }

    removeLocation = () => {
      let updatedState = this.state.locations.slice(1);
      console.log(updatedState);
      this.setState({locations: updatedState});
      console.log(this.state.locations);
    }
  
    toggleLocation = (locationID) => {
      let currentLocations = this.state.locations
      //get index of toggled location
      let togglePlaceIndex = this.state.locations.findIndex((location) => location.id == locationID);
      //get place and toggle its value
      let togglePlace = this.state.locations[togglePlaceIndex];
      //remove from locations array, add updated value, and update state
    }

  render() {
    return (
      <div className="App">
      <div className='row'>
        <div className='col-md-6'>
          <button onClick={this.removeLocation}> Remove item</button>
          <ListWindow locations={this.state.locations} toggleLocation= {this.toggleLocation}/>
        </div>
        <div className='col-md-6'>
          <MapContainer locations = {this.state.locations} />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
