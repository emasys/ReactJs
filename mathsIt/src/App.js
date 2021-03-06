import React, {Component} from 'react';
import Sticky from 'react-sticky-el';

//COMPONENTS
import List from './components/list';
import Footer from './components/footer';

const URL = 'https://newton.now.sh';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: 'factor',
      expression: '',
      solution: '',
      questions: []
    };

    this.selectedItem = this
      .selectedItem
      .bind(this);

    this.calc = this
      .calc
      .bind(this);

    this.handleForm = this
      .handleForm
      .bind(this);
  }

  fetchList = async() => {
    const req = await fetch(`${URL}/${this.state.operation}/${this.state.expression}`, {method: 'GET'});
    const data = await req.json();
    this
      .state
      .questions
      .push(data);
    this.setState({solution: data});

  }

  componentDidMount() {}

  selectedItem = (e) => {
    this.setState({operation: e.target.value});
  }

  calc = (e) => {
    this.setState({expression: e.target.value});
  }

  handleForm = (e) => {
    e.preventDefault();
    this.fetchList();
    this.setState({expression: ''})

  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6  header col-sm-12 col-md-6">
            <div className="search" id="header">
              <Sticky stickyClassName={'positioning'}>
                <header>
                  <div className="input">
                    <form onSubmit={this.handleForm}>
                      <div className="row">
                        <div className="col">
                          <select className="custom-select col-12" onChange={this.selectedItem}>
                            <option value="factor">Factorize</option>
                            <option value="simplify">Simplify</option>
                            <option value="derive">Derive</option>
                            <option value="integrate">Integrate</option>
                            <option value="zeroes">Find 0's</option>
                          </select>
                        </div>
                        <div className="col-8">
                          <input
                            type="text"
                            placeholder="x^2+2x"
                            value={this.state.expression}
                            onChange={this.calc}/>
                        </div>
                      </div>
                    </form>
                  </div>
                </header>
              </Sticky>
            </div>
            <List solution={this.state.questions}/>
            <Footer/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
