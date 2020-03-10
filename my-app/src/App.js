import React from 'react';

import './App.css';
import axios from "axios";
import PersonCard from "./PersonCard";

class App extends React.Component {
  state = {
    people: [],
    peopleText: ''
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/XueYingLin/followers')
    .then(res => {
      this.setState({
        people: res.data
      });
    })
    .catch(err => console.log(err.message));
  }
  
  handleChanges = e => {
    this.setState({
      peopleText: e.target.value
    });
  };

  fetchPeople = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/XueYingLin/${this.state.peopleText}`)
      .then(res => {
        this.setState({
          people: res.data
        });
      })
      .catch(err => console.log(err.message));

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.people !== this.state.people) {
      console.log("new people array");
      axios
      .get('https://api.github.com/users/XueYingLin/followers')
      .then(res => {
        this.setState({
          people: res.data
        });
      })
      .catch(err => console.log(err.message));
      
    }
  }
  
  render() {
  return (
    <div className="App">
      <h1>My App</h1>
      <div>
        <input value={this.state.peopleText} onChange={this.handleChanges} />
        <button onClick={this.fetchPeople}>Fetch People</button>
        <div className="people">
          {this.state.people.map(p => (
            <PersonCard key={p}
                        avatar_url={p.avatar_url}
                       login= {p.login}
                       html_url={p.html_url}
                        />
            
          ))}

{/* <img src={props.avatar_url} />
            <p>{props.login}</p>
            <p>{props.html_url}</p> */}

        </div>
      </div>
      
    </div>
  );
  }
}

export default App;
