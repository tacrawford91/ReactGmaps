import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, google} from 'google-maps-react';

const APIKEY = 'AIzaSyAnyOZMsMoFHbhSubGRPAg2_9LYV8av9Fo';



export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={10} 
          style={{width: '500px', height: '500px'}}
        >
          {this.props.selected.map((location, index) => {
            if(!this.props.unselected.includes(location.id)) {                
                return (
                    <Marker
                      key={location.id}
                      name={location.name} 
                      position={{lat: location.latitude, lng: location.longitude}}
                      icon= {{
                        url: 'http://maps.google.com/mapfiles/ms/icons/red.png',
                        scale: 3}}
                    />

                )
            } else {
                return (
                  
                  <Marker name={location.name}
                    key={location.id}  
                    position={{lat: location.latitude, lng: location.longitude}}
                    icon= {{
                      url: 'http://maps.google.com/mapfiles/ms/icons/grey.png',
                      scale: 3}}
                  />
                )}
            }
            )               
        }

        
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (APIKEY)
})(MapContainer)

// if (this.props.unselected.filter((unselected) => unselected.id === location.id).length ===0 )


// {this.props.locations.map( (location) => (
//   <Marker name={location.name}  
//   position={{lat: location.latitude, lng: location.longitude}}
//   icon= {{
//     url: 'http://maps.google.com/mapfiles/ms/icons/grey.png',
//     scale: 3
// }}
//   />))}