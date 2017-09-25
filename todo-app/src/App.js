import React, {Component} from 'react';
import Sticky from 'react-sticky-el';

//COMPONENTS
import List from './components/list';
import Footer from './components/footer';

const URL = 'http://localhost:8000/api/todos';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      title: ''

    };

    this.fetchList = this
      .fetchList
      .bind(this);

    this.getTitle = this
      .getTitle
      .bind(this);

  }

  fetchList = async() => {
    const req = await fetch(URL, {method: 'GET'});
    const data = await req.json();
    this.setState({list: data});
    console.log(this.state.list);
  }

  componentDidMount() {
    this.fetchList();
  }

  handleForm = () => {
    let title = this.state.title;
    fetch(URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title})
    })
  }
  getTitle = (e) => {
    this.setState({title: e.target.value})
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6  header col-sm-12 col-md-6 ">
            <h1>Todo App</h1>
            <div className="search" id="header">
              <Sticky stickyClassName={'positioning'}>
                <header>
                  <div className="input text-center">
                    <form onSubmit={this.handleForm}>
                      <div className="row">

                        <div className="col-8">
                          <input
                            type="text"
                            placeholder="Title:"
                            value={this.state.expression}
                            onChange={this.getTitle}/>
                        </div>
                      </div>
                    </form>
                  </div>
                </header>
              </Sticky>
            </div>
            <List list={this.state.list}/>
            <Footer/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
