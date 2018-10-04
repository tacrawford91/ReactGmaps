import React, {Component} from 'react';


class Checkbox extends Component {
    constructor(props){
        super(props) 
    }
    render() { 
        return (
                (this.props.selected.filter((alreadySelected) => alreadySelected.id === this.props.localStore.id).length === 0) ?
                (
                    <div>
                        <input type='checkbox' onClick={() => this.props.toggleLocation(this.props.localStore.id)}/> {this.props.localStore.address} 
                        <h6>{`${this.props.localStore.city}, ${this.props.localStore.state}`}</h6>
                    </div>
                )
                :
                (
                    <div>
                        <input type='checkbox' onClick={() => this.props.toggleLocation(this.props.localStore.id)} defaultChecked/> {this.props.localStore.address} 
                        <h6>{`${this.props.localStore.city}, ${this.props.localStore.state}`}</h6>
                    </div>
                )
            )
        }
    }


export default Checkbox;

