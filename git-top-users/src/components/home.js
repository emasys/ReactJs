import React, {Component} from 'react';

//Components
import Lists from './lists';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      location: 'lagos',
      language: 'javascript'
    };
    this.getLocation = this
      .getLocation
      .bind(this);

    this.handleForm = this
      .handleForm
      .bind(this);

    this.getLanguage = this
      .getLanguage
      .bind(this);
  }

  fetchUsers = async() => {
    const USERS_URL = `https://api.github.com/search/users?q=location:${this.state.location}+language:${this.state.language}`;
    const res = await fetch(USERS_URL, {method: 'GET'});
    const data = await res.json();
    this.setState({list: data.items});
  }
  componentDidMount() {
    this.fetchUsers();
  }

  getLocation(e) {
    let keyword = e.target.value;
    if (keyword !== '') {
      this.setState({location: keyword});
    }
  }

  getLanguage(e) {
    let keyword = e.target.value;
    if (keyword !== '') {
      this.setState({language: keyword});
    }
  }
  handleForm(e) {
    e.preventDefault();
    this.fetchUsers();
  }
  render() {
    return (
      <div>
        <div className="row">
          <form action="" method="get" className="col s12" onSubmit={this.handleForm}>
            <div className="row">
              <div className="input-field col s6">
                <input type="text" onChange={this.getLocation}/>
                <label>City or Country e.g: Lagos</label>
              </div>
              <div className="input-field col s6">
                <input type="text" onChange={this.getLanguage}/>
                <label>language e.g: python</label>
              </div>
            </div>
            <button type="submit" className="hidden">submit</button>
          </form>
        </div>
        <Lists list={this.state.list}/>
      </div>
    );
  }
}

export default Home;