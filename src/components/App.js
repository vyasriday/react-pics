import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state  = {
    images: []
  }
  
  async getSearchTem(term) {
    // making api request using axios
    try {
      const res = await unsplash.get('/search/photos', {
        params: {
          query: term,
          per_page: 20,
          orientation: 'portrait'
        }
      })
      this.setState({
        images: res.data.results
      })
    } catch(e) {
      console.error("Error:", e);
    } 
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar getSearchTerm={this.getSearchTem.bind(this)} />
        <ImageList images= {this.state.images}/>

      </div>
    )
  }
}

export default App;