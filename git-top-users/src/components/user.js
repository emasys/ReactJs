import React, {Component} from 'react';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: ''
    };

    this.getUserBio = this
      .getUserBio
      .bind(this);
  }

  fetchUser = async() => {
    const name = this.props.match.params.id
      ? this.props.match.params.id
      : "emasys"
    const USER_BIO = `https://api.github.com/users/${name}`;
    const res = await fetch(USER_BIO, {method: 'GET'});
    const data = await res.json();
    this.setState({bio: data});
  }

  getUserBio() {
    const bio = this.state.bio;

    return (
      <div className="row justify-content-center">
        <div className="col s12 m4 imgBox center ">
          <img className="z-depth-3" src={bio.avatar_url} alt="img"/>
        </div>
        <div className="col s12 m4 center">
          <ul className="collection with-header z-depth-3">
            <li className="collection-header">
              <h4>Basic Info</h4>
            </li>
            <li className="collection-item">
              <span>username</span>
              {bio.login}
            </li>
            <li className="collection-item">
              <span>Names</span>
              {bio.name}
            </li>
            <li className="collection-item">
              <span>Location</span>
              {bio.location}
            </li>
            <li className="collection-item">
              <span>Blog</span>
              <a href={bio.blog}>Visit Blog</a>

            </li>
            <li className="collection-item">
              <span>public repos</span>
              <a href={bio.repos_url}>{bio.public_repos}</a>
            </li>
          </ul>
        </div>
        <div className="col s12 m4 center">
          <ul className="collection with-header z-depth-3">
            <li className="collection-header">
              <h4>Other Info</h4>
            </li>
            <li className="collection-item">
              <span>company</span>
              {bio.company
                ? bio.company
                : "null"}
            </li>
            <li className="collection-item">
              <span>Bio</span>
              {bio.bio
                ? bio.bio
                : "null"}
            </li>
            <li className="collection-item">
              <span>Followers</span>
              {bio.followers}
            </li>
          </ul>
        </div>
      </div>
    )

  }
  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <div>
        {this.getUserBio()}
      </div>
    );
  }
}

export default User;