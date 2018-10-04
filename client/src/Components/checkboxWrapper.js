import React, {Component} from 'react';
import Checkbox from './checkbox';


class CheckboxWrapper extends Component {
    constructor(props) {
        super(props) 
        this.state = ({
            SelectAll: 0
        })
    }

    selectAllToggle = (stateName) => {
        if (this.state.SelectAll){
            this.setState({ SelectAll: 0})
            this.props.stateDeSelectAll(this.props.stateName);

        } else {
            this.setState({ SelectAll: 1})
            this.props.stateSelectAll(this.props.stateName);
        }

    }

    render () {
        return (
            <div>
                <h3>{this.props.stateName} 
                    <button className='btn' onClick={() => this.selectAllToggle(this.props.stateName)}>
                        {(this.state.SelectAll)? 'Deselect All' : 'Select All' }
                    </button>
                </h3>
                {this.props.localLocations.map((showLocation) => { return (
                    <Checkbox 
                        key={showLocation.id}
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



            