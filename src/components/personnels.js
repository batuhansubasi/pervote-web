import React, { Component } from 'react';
import './personnels.css';

class Personnels extends Component {
  constructor() {
    super();
    this.state = {
        personnels: []
    };
  }

  componentDidMount() {
    fetch('/api/personnels')
      .then(res => res.json())
      .then(personnels => this.setState({personnels}, () => console.log('Personnels fetched...', personnels)));
  }

  render() {
    return (
      <div>
        <h2>personnels</h2>
        <ul>
        {this.state.personnels.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Personnels;