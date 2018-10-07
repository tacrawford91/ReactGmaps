import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const APIKEY = 'AIzaSyAnyOZMsMoFHbhSubGRPAg2_9LYV8av9Fo';



export class MapContainer extends Component {
   
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={10} 
          style={{width: '100%', height: '100%'}}
        >

          {this.props.locations.map((location) => {
           return (this.props.selected.filter((currentPin) => location.id === currentPin.id).length === 1) ?                 
            (
                    <Marker
                      key={location.id}
                      name={location.name} 
                      position={{lat: location.latitude, lng: location.longitude}}
                      icon= {{
                        url: 'http://maps.google.com/mapfiles/ms/icons/red.png',
                        scale: 3}}
                    />
                )
                :
                (
                  <Marker name={location.name}
                    key={location.id}  
                    position={{lat: location.latitude, lng: location.longitude}}
                    icon= {{
                      url: 'http://maps.google.com/mapfiles/ms/icons/grey.png',
                      scale: 3}}
                  />
                )
              }
            )               
        }
          {this.props.selected.map((location) => {
            return ( 
              <InfoWindow
                key={location.id}
                position ={{ lat: location.latitude, lng: location.longitude }}
                  visible={(!!this.props.showInfo)}>
                  <div>
                    <p>Location id: {location.id}</p>
                    <p>Store: {location.name}</p>
                  </div>
                </InfoWindow>
              )
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
})(MapContainer);


// {
//   this.props.locations.map((location) => {
//     return (this.props.selected.filter((currentPin) => location.id === currentPin.id).length === 1) ?
//       (
//         <Marker
//           key={location.id}
//           name={location.name}
//           position={{ lat: location.latitude, lng: location.longitude }}
//           icon={{
//             url: 'http://maps.google.com/mapfiles/ms/icons/red.png',
//             scale: 3
//           }}
//         />
//         <InfoWindow
//           visible={this.props.showInfo && this.props.selected.includes(location.id)}>
//           <div>
//             <p>{location.id}</p>
//             <p>{location.name}</p>
//           </div>
//         </InfoWindow>
//                 )
//       :
//       (

//         <Marker name={location.name}
//           key={location.id}
//           position={{ lat: location.latitude, lng: location.longitude }}
//           icon={{
//             url: 'http://maps.google.com/mapfiles/ms/icons/grey.png',
//             scale: 3
//           }}
//         />
//       )
//   }
//   )
// }

