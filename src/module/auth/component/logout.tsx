import { Component } from 'react';
import auth from '../authService';

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location.href = '/';
  }
  render() {
    return null;
  }
}

export default Logout;
