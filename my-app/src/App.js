import React from 'react';

import './App.css';
import axios from "axios";
import Profile from "./Profile";

class App extends React.Component {
  state = {
    profile: {},
    followers: [],
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/XueYingLin')
    .then(res => {
      this.setState({
        profile: res.data
      });
    })
    .catch(err => console.log(err.message));
    axios
    .get('https://api.github.com/users/XueYingLin/followers')
    .then(res => {
      this.setState({
        followers: res.data
      });
    })
    .catch(err => console.log(err.message));
  }
  
  render() {
    return (
      <Profile avatar_url={this.state.profile.avatar_url} 
              login={this.state.profile.login} 
              html_url={this.state.profile.html_url} 
              followers={this.state.followers} />
    );
  }
}

export default App;
