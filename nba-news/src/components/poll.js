import React, {Component} from 'react';

const URL_POLL = 'http://localhost:5001/teams';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: ''
    };

    this.fetchPoll = this
      .fetchPoll
      .bind(this);
    this.renderPoll = this
      .renderPoll
      .bind(this);
  }

  fetchPoll = async() => {
    const res = await fetch(`${URL_POLL}?poll=true&sort=count&_order=desc`, {method: 'GET'});
    const data = await res.json();
    this.setState({polls: data});
  }

  componentDidMount() {
    this.fetchPoll();
  }

  addCount(count, id) {
    fetch(`${URL_POLL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        count: count + 1
      })
    }).then(() => {
      this.fetchPoll();
    })

  }

  renderPoll() {
    if (this.state.polls) {
      let position = ['1ST', '2ND', '3RD'];
      return this
        .state
        .polls
        .map((item, index) => {
          return (
            <div
              key={item.id}
              className="poll_item"
              onClick={() => this.addCount(item.count, item.id)}>
              <img src={`/images/teams/${item.logo}`} alt="item.name"/>
              <h4>{position[index]}</h4>
              <div>
                {`${item.count} votes`}
              </div>
            </div>
          )
        })
    }
  }
  render() {
    return (
      <div className="home_poll">
        <h3>Who will be the next champion</h3>
        <div className='poll_container'>
          {this.renderPoll()}

        </div>
      </div>
    );
  }
}

export default Poll;