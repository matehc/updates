import React, { Component } from 'react'

export default class Jjjj extends Component {
  
  constructor(props) {
    super();
    this.state = {
      rice: '',
    }
  }
  componentDidMount() {
    rice = 'new value';
    this.setState({ rice: 'new value' });
  }

  render() {
    const { } = this.state;
    return (
      <div>
        
      </div>
    )
  }
}
