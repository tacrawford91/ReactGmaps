import React, {Component} from 'react';
import Checkbox from './checkbox';


class CheckboxWrapper extends Component {
    render () {
        return (
            <div>
                <h3>{this.props.stateName} <button className='btn' onClick={() => this.props.stateSelectAll(this.props.stateName)}>SelectAll</button></h3>
                {this.props.localLocations.map((showLocation) => { return (
                    <Checkbox 
                        localStore={showLocation}
                        toggleLocation={this.props.toggleLocation}
                        selected = {this.props.selected}
                        />
                )
                })}
            </div>
        )
    }
}


export default CheckboxWrapper;



            