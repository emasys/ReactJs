import React from 'react';
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import {CSSTransitionGroup} from 'react-transition-group';

const fadeAnimation = {
  transitionName: "fade",
  transitionAppear: true,
  transitionAppearTimeout: 500,
  transitionEnter: true,
  transitionEnterTimeout: 500,
  transitionLeave: true,
  transitionLeaveTimeout: 500
};

const generateList = ({list}) => {
  return list.map((user, id) => {
    return (
      <Reveal key={id} effect="animated fadeInUp">
        <Link
          to={`/user/${user.login}`}
          className="col s6 m3"
          style={{
          color: '#444'
        }}>
          <div className="card">
            <div className="card-image">
              <img src={user.avatar_url} alt={user.login}/>
              <Link
                to={`/user/${user.login}`}
                className="btn-floating halfway-fab waves-effect  waves-light red">
                <i className="material-icons">account_box</i>
              </Link>
            </div>
            <div className="card-content">
              <h6>{user.login}</h6>
              <p>{`Rank No: ${id + 1}`}</p>
            </div>
          </div>
        </Link>
      </Reveal>
    )
  })
}

const Lists = (props) => {
  return (

    <div className="row">
      <CSSTransitionGroup {...fadeAnimation}>
        {generateList(props)}
      </CSSTransitionGroup>

    </div>

  );
}

export default Lists;