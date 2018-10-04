import React, {Component} from 'react';

import CheckboxWrapper from './checkboxWrapper';


class CheckboxWindow extends Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.stateSort).map((locationState) => { 
                    return (
                        <CheckboxWrapper  
                            stateName={locationState} 
                            localLocations ={this.props.locations.filter((location) => location.state === locationState)} 
                            toggleLocation={this.props.toggleLocation} 
                            stateSelectAll={this.props.stateSelectAll} 
                            selected = {this.props.selected}
                            />
                    )
                })}
            </div>
        )
    }
}

export default CheckboxWindow;