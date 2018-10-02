import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const locations = [{
  "name": "Essex Street 7-Eleven",
  "address": "264 Essex Street",
  "city": "Lynn",
  "state": "MA",
  "zip_code": "01902",
  "country": "US",
  "longitude": -70.937142,
  "latitude": 42.470163,
  "id": 3561
}, {
  "name": "Nickerson Street 7-Eleven",
  "address": "9 Nickerson Street",
  "city": "Seattle",
  "state": "WA",
  "zip_code": "98109",
  "country": "US",
  "longitude": -122.357277,
  "latitude": 47.649202,
  "id": 3514
}]

const APIKEY = 'AIzaSyAnyOZMsMoFHbhSubGRPAg2_9LYV8av9Fo';
export class MapContainer extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      locations:  locations

    }
  }
  

  // createAndAddMarker =(locations) => {
  //   <Map>
  //         this.state.locations.map( (location) => { 
  //           <Marker 
  //           name={location.name}
  //           position={{lat: location.latitude, lng: location.longitude}}
  //           />
  //       })
  //   </Map>
  // }
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
          {this.state.locations.map( (location) => (<Marker name={location.name}  position={{lat: location.latitude, lng: location.longitude}}/>))}
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (APIKEY)
})(MapContainer)