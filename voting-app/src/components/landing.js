import React, {Component} from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <h1 className="display-3">Home page</h1>
            <p className="lead">This is the landing page</p>
            <hr className="my-4"/>

            <p className="lead">
              <a className="btn btn-outline-danger btn-lg" href="/charts" role="button">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;