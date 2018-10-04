import React, {Component} from 'react';

import CheckboxWrapper from './checkboxWrapper';


class CheckboxWindow extends Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.stateSort).map((locationState) => { 
                    return (
                        <CheckboxWrapper
                            key={locationState}  
                            stateName={locationState} 
                            // localLocations ={this.props.locations.filter((location) => location.state === locationState)} 
                            localLocations={this.props.stateSort[locationState]}
                            toggleLocation={this.props.toggleLocation} 
                            stateSelectAll={this.props.stateSelectAll}
                            stateDeSelectAll={this.props.stateDeSelectAll} 
                            selected = {this.props.selected}
                            />
                    )
                })}
            </div>
        )
    }
}

export default CheckboxWindow;