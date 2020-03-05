import React from 'react'

class Product extends React.Component {

  componentDidMount() {
    var height = 200; // calculate height of rendered component here!
    // set height only one time
    if (this.props.findHeight) {
      this.props.setHeight(height);
    }
  }

  render() {
    return <div style={{ height: this.props.height, backgroundColor: 'green' }}>
      Product
        </div>;
  }
};

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      maxHeight: 0,
      findHeight: true
    }
  }

  componentDidMount() {
    this.setState({
      maxHeight: this.state.maxHeight,
      findHeight: false
    });
  }

  setMaxHeight = (maxHeight) => {
    if (maxHeight > this.state.maxHeight) {
      this.setState({ maxHeight: maxHeight })
    }
  }

  render() {
    return (<div>
      <Product setHeight={this.setMaxHeight} height={this.state.maxHeight} findHeight={this.state.findHeight} />
    </div>);
  }
};

export default Main;