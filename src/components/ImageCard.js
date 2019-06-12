import React, { Component } from 'react'

class ImageCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    }
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan.bind(this));  
  }
  
  setSpan() {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil( height / 10 );
    this.setState({
      spans: spans
    })
  }

  render() {
    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img src={urls.small} alt={description} ref={this.imageRef} />        
      </div>
    )
  }
}

export default ImageCard;
