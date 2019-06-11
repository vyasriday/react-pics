import React, {Component, Fragment} from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  }

  onInput(event) {
    this.setState({
      term: event.target.value.toUpperCase()
    })
  }

  render() {
    return (
      <Fragment>
      <input value={this.state.term} onChange={this.onInput.bind(this)} onKeyUp = {(event) => {
        if(event.keyCode === 13) {
          console.log('Enter Key Pressed!!!');
        }
      }} />
      {this.state.term}
      </Fragment>
    )
  }
}

export default SearchBar;