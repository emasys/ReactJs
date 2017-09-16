import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';

const URL_TEAM = 'http://localhost:5001/teams';

const fadeAnimation = {
  transitionName: "fade",
  transitionAppear: true,
  transitionAppearTimeout: 500,
  transitionEnter: true,
  transitionEnterTimeout: 500,
  transitionLeave: true,
  transitionLeaveTimeout: 500
}

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      filtered: [],
      keyword: ''
    };

    this.getList = this
      .getList
      .bind(this);
  }

  componentDidMount = async() => {
    const res = await fetch(URL_TEAM, {method: 'GET'});
    const data = await res.json();
    this.setState({teams: data, filtered: data})
  }

  getList = ({filtered}) => {
    return filtered.map((item) => {
      return (

        <Link to={`/team/${item.name}`} key={item.id} className="team_item">
          <img alt={item.name} src={`/images/teams/${item.logo}`}/>
        </Link>

      )
    })
  }

  filterList = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const list = this
        .state
        .teams
        .filter((item) => {
          return item
            .name
            .toLowerCase()
            .indexOf(keyword) > -1;
        })

      this.setState({filtered: list, keyword: e.target.value})
    } else {
      this.setState({filtered: this.state.teams})
    }

  }
  render() {
    return (
      <div className="teams_component">
        <div className="teams_input">
          <input
            type="text"
            placeholder="Search for a Team"
            onChange={(e) => {
            this.filterList(e)
          }}/>
        </div>
        <div className="teams_container">
          <CSSTransitionGroup {...fadeAnimation}>
            {this.getList(this.state)}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Teams;