import React, { Component } from 'react';
import Profile from './profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      isLoading: false,
      user: {}
    };
  }

  inputHandler = (env) => {
    const name = env.target.value.toLowerCase();
    this.setState({ name });
  };

  onSearch = () => {
    this.setState({ isLoading: true });
    const urls = `https://api.github.com/users/${this.state.name}`;
    fetch(urls)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.message) {
          alert(response.message);
        } else {
          console.log(response);
          const obj = {
            image: response.avatar_url,
            name: response.login,
            repo: response.html_url,
            email: response.email || "",
          };
          this.setState({ user: obj });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };


  render() {
    return (
      <div className="container">
        <div className="col-md-12 text-center mt-3 input" >
          <input value={this.state.name} onChange={this.inputHandler} className="" />
          <br />
          <button className="btn btn-primary mt-3" onClick={this.onSearch}>Search</button>
        </div>
        <Profile
          isLoading={this.state.isLoading}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
