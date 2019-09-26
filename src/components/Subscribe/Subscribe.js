import React, { Component } from 'react'
import styles from './Subscribe.module.scss';

type State = {
  name: string,
  email: string,
};

export default class Subscribe extends Component<{}, State> {
 constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
     name: '',
     email: ''
    });
  }
  
 render() {
  return (
   <form className={styles.component} onSubmit={this.onSubmit}>
     <label className={styles.label}>
       Name:
       <input type="text" value={this.state.name} onChange={this.onNameChange} />
     </label>
     <label className={styles.label}>
       Email:
       <input type="email" value={this.state.email} onChange={this.onEmailChange} />
     </label>
     <input className={styles.subscribeBtn} type="submit" value="Subscribe" />
   </form>
  );
 }
}