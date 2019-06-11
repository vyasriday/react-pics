import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  
  getSearchTem(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar getSearchTerm={this.getSearchTem} />

      </div>
    )
  }
}

export default App;