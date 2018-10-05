import React, {Component} from 'react';


class Checkbox extends Component {
    // constructor(props){
    //     super(props) 
    //     this.state = ({
    //         checked: 'false'
    //     })
    // }
    // componentDidMount() {
    //     this.setState({checked: !!this.props.checked})
    // }

    render() { 
        return (
                    <div>
                        <input type='checkbox'  checked={!!this.props.checked} onClick={() => this.props.checkUpdater(this.props.localStore.id) } 
                        onChange={() => this.props.checkChangeHandler(this.props.localStore.id)} 
                        /> {this.props.localStore.name} 
                        <h6>{`${this.props.localStore.city}, ${this.props.localStore.state}`}</h6>
                    </div>
                )
        }
    }


export default Checkbox;
