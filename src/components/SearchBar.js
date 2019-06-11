import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getSearchTerm(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit.bind(this)} >
          <div className="filed">
            <label> Image Search
              <input value={this.state.term} onChange={this.onInputChange.bind(this)} />
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;