import React, {Component} from 'react';
import {RadioGroup, Radio} from 'react-radio-group';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


class ListWindow extends Component {
    render() {
        return (
            <ul>
                {Object.keys(this.props.stateSort).map((locationState) => { return (
                    <div>
                    <h3>{locationState} <button className='btn' onClick={() => this.props.stateSelectAll(locationState)}>SelectAll</button></h3>
                    
                    {this.props.locations.filter((location) => location.state === locationState)
                    .map((matchedLocation) => { return (this.props.selected.filter((alreadySelected) => alreadySelected.id === matchedLocation.id).length === 0) ?
                            (
                                <div>
                                    <input type='checkbox' key={matchedLocation.id} value={matchedLocation.id} onClick={() => this.props.toggleLocation(matchedLocation.id)} /> {matchedLocation.address} 
                                    <h6>{`${matchedLocation.city}, ${matchedLocation.state}`}</h6>
                                </div>
                            )
                            :
                            (
                                <div>
                                    <input type='checkbox' key={matchedLocation.id} value={matchedLocation.id}  onClick={() => this.props.toggleLocation(matchedLocation.id)}  checked/> {matchedLocation.address} 
                                    <h6>{`${matchedLocation.city}, ${matchedLocation.state}`}</h6>
                                </div>
                                ) 

                        })}
                    </div>

                    )
                })}
            </ul>
        )
    }
}

export default ListWindow;




// render() {

//     let currentState = '';
//     return (
//         <ul>
//             {this.props.locations.map((location, index) => {
//                 if(currentState === '' || currentState !== location.state) {
//                      currentState = location.state;                      
//                     return (
//                             <div>
//                                 <h3>{location.state}</h3>
//                                 <h3>{location.id}</h3>
//                                 <li>
//                                     <input type='checkbox' onClick={() =>this.props.toggleLocation(location.id)} checked/> {location.name} - {location.state}
//                                  </li>
//                             </div> 
//                     )
//                 } else {
//                    return (
//                         <li>
//                             <input type='checkbox' onClick={ () => this.props.toggleLocation(location.id)} checked/> {location.name}---------{location.state} ---- {location.id}
//                         </li>
//                         )   
//                     }
//                 }
//                 )               
//             }
//         </ul>
//     )
// }


{/* <CheckboxGroup name={locationState}>
<Checkbox value={matchedLocation.id} type='check' keys={matchedLocation.id} onClick={() => this.props.toggleLocation(matchedLocation.id)} /> {matchedLocation.address} 
<h6>{`${matchedLocation.city}, ${matchedLocation.state}`}</h6>
</CheckboxGroup> */}