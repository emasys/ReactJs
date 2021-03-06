import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <nav
            className="navbar fixed-top justify-content-between navbar-expand-lg navbar-light bg-teal">
            <a className="navbar-brand" href="/">Poll iT
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>

              </ul>
            </div>
          </nav>

        </div>
      </div>
    );
  }
}

export default Header;