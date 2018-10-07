import React from 'react';

import LocationData from './locations.json';
import MapContainer from './Components/map'
import CheckboxWindow from './Components/checkboxWindow';
import SearchHeader from './Components/searchHeader';
import styles from './App.css';

class App extends React.Component {
    constructor(props) {
      super(props) 
      this.state = {
        locations:  LocationData.sort((a,b) => a.state.localeCompare(b.state)).map(location => ({...location, selected: 1})),
        selected: [],
        customerStates: [...new Set(LocationData.map(location => location.state))],
        searchTerm: '',
        allSelected: 0
      }
    }
    
    deSelectAll = () => {
      this.setState({
        allSelected: 0,
        selected: []
      })
    }
    hideInfo = () => {
      this.setState({ showInfo: 0 });
    }
    searchHandler = (term) => {
      this.setState({ searchTerm: term });
    }
    selectAll = () => {
      this.setState({
        allSelected: 1,
        selected: [...this.state.locations]
      })
      this.state.customerStates.forEach((state)=> this.stateSelectAll);
    }
    showInfo = () => {
      this.setState({showInfo: 1});   
    }
    stateSelectAll = (selectedState) => {
      this.setState({selected: [...this.state.selected,...this.state.locations.filter((location) => location.state === selectedState)]});
    }
    stateDeSelectAll = (deSelectedState) => {
      let updated = this.state.selected.filter((location) => location.state !== deSelectedState);
      this.setState({
        allSelected: 0,
        selected: updated
      });
    }
    
    toggleLocation = (locationID) => {
      if (this.state.selected.filter((selected) => selected.id === locationID).length === 0 ) {
        this.setState({ selected: [...this.state.selected.filter((location) => location.id !== locationID), LocationData.find((location) => location.id === locationID)]})
      } else {
        this.setState({selected: this.state.selected.filter((selected) => selected.id !== locationID)})
      }
    }
    render() {
    return (
      <section className={  styles.app  }>
        <SearchHeader
          deSelectAll = { this.deSelectAll  }
          hideInfo = {  this.hideInfo  }
          searchHandler={  this.searchHandler }
          selected={  this.state.selected  } 
          selectAll={  this.selectAll }
          showInfo = {  this.showInfo  }
          />
        <div className='mainWrapper'>
          <div className='dataWrapper'>
            <CheckboxWindow 
              allSelected = { this.state.allSelected  }
              customerStates={  this.state.customerStates  } 
              deSelectAll = { this.selectAll  }
              locations={  this.state.locations  } 
              searchTerm = {  this.state.searchTerm  }
              selectAll = {  this.selectAll  }
              selected={  this.state.selected  } 
              stateDeSelectAll={  this.stateDeSelectAll  }
              stateSelectAll={  this.stateSelectAll  } 
              toggleLocation= {  this.toggleLocation  } 
              />
          </div>
          {/* <CheckboxWindow locations={this.state.locations} toggleLocation= {this.toggleLocation} selected={this.state.selected} stateSort={this.state.stateSort} stateSelectAll={this.stateSelectAll} stateDeSelectAll={this.stateDeSelectAll}/> */}
          <div className='mapWrapper'>
            <MapContainer 
              locations ={  this.state.locations  } 
              selected={  this.state.selected}
              showInfo={  this.state.showInfo  }  
              />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
