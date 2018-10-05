import React, {Component} from 'react';
import Checkbox from './checkbox';


class CheckboxWrapper extends Component {
    constructor(props) {
        super(props) 
        this.state = ({
            SelectAll: 0,
            checked: [],
        })
    }

    selectAllToggle = (stateName) => {
        if (this.state.SelectAll){
            this.setState({ 
                SelectAll: 0,
                checked: []
            });
            this.props.stateDeSelectAll(stateName);
            


        } else {
            this.setState({ 
                SelectAll: 1,
                checked: [...this.props.localLocations.map((showLocation) => showLocation.id)]
            })
            this.props.stateSelectAll(stateName);
        }

    }

    checkUpdater = (localStoreID) => {
       if (!this.state.checked.includes(localStoreID)) {
            let current = this.state.checked;
            current.push(localStoreID);
            this.setState({checked: current});
            this.props.toggleLocation(localStoreID);
       } else {
            this.setState({checked: this.state.checked.filter((item) => item !== localStoreID)});
            this.props.toggleLocation(localStoreID);
       }
    }

    checkChangeHandler = (localStoreId) => {
    }

    render () {
        return (
            <div>
                <h3>{this.props.stateName} 
                    <button className='btn' onClick={() => this.selectAllToggle(this.props.stateName)}>
                        {(this.state.SelectAll) ? 'Deselect All' : 'Select All' }
                    </button>
                </h3>
                {this.props.localLocations.map((showLocation) => { return (
                    <Checkbox 
                        key={showLocation.id}
                        id={showLocation.id}
                        localStore={showLocation}
                        checked={this.state.checked.includes(showLocation.id)}
                        checkChangeHandler={this.checkChangeHandler}
                        checkUpdater={this.checkUpdater}
                        />
                )
                })}
            </div>
        )
    }
}


export default CheckboxWrapper;


