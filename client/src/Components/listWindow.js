import React, {Component} from 'react';


class ListWindow extends Component {

    render() {

        let currentState = '';
        return (
            <ul>
                {this.props.locations.map((location, index) => {
                    if(currentState === '' || currentState !== location.state) {
                         currentState = location.state;                      
                        return (
                                <div>
                                    <h3>{location.state}</h3>
                                    <h3>{location.id}</h3>
                                    <li>
                                        <input type='checkbox' onClick={() =>this.props.toggleLocation(location.id)} checked/> {location.name} - {location.state}
                                     </li>
                                </div> 
                        )
                    } else {
                       return (
                            <li>
                                <input type='checkbox' onClick={ () => this.props.toggleLocation(location.id)} checked/> {location.name}---------{location.state} ---- {location.id}
                            </li>
                            )   
                        }
                    }
                    )               
                }
            </ul>
        )
    }
}

export default ListWindow;