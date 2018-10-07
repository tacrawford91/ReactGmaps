import React from 'react';

import CheckboxWrapper from './checkboxWrapper';


class CheckboxWindow extends React.Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.stateSort).map((locationState) => { 
                    return (
                        <CheckboxWrapper
                            key={locationState}  
                            localLocations={this.props.stateSort[locationState]}
                            selected = {this.props.selected}
                            stateName={locationState} 
                            stateDeSelectAll={this.props.stateDeSelectAll} 
                            stateSelectAll={this.props.stateSelectAll}
                            toggleLocation={this.props.toggleLocation} 
                        />
                    )
                })}
            </div>
        )
    }
}

export default CheckboxWindow;