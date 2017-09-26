import React, {Component} from 'react';
import Sticky from 'react-sticky-el';

//COMPONENTS import Lists from './components/lists';
import Footer from './components/footer';

const URL = 'http://localhost:8000/api/todos';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      title: '',
      post: ''

    };

    this.fetchList = this
      .fetchList
      .bind(this);

    this.getTitle = this
      .getTitle
      .bind(this);

    this.generateList = this
      .generateList
      .bind(this);

    this.generateItems = this
      .generateItems
      .bind(this);

    this.getPost = this
      .getPost
      .bind(this);

    this.deleted = this
      .deleted
      .bind(this);

    this.addItem = this
      .addItem
      .bind(this);

  }

  generateItems = (items) => {
    return items.map((item, id) => {
      return (
        <div key={id}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{item.content}</li>
          </ul>

        </div>
      )
    });
  }

  getPost = (e) => {
    // console.log(e.target.value);
    this.setState({post: e.target.value});
    console.log(this.state.post);
  }

  addItem = (e, id) => {
    let content = this.state.post;
    e.preventDefault();
    fetch(`${URL}/${id}/items`, {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content})
    }).then(res => res.json())
  }

  deleted = (e) => {
    fetch(`${URL}/${e}`, {method: 'DELETE'}).then(res => {
      return window
        .location
        .reload(true);
    })
  }

  generateList = (list) => {
    // console.log(list);
    return list.map((item) => {
      return (
        <div
          id="accordion"
          key={item.id}
          role="tablist"
          aria-multiselectable="true"
          className="list">
          <div className="card">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href={`#${item.id}`}
              aria-expanded="false"
              aria-controls="collapseOne"
              className="card-header"
              role="tab"
              id="headingOne">
              <h5 className="mb-0 title float-left">
                {item.title}

              </h5>
              <small className="float-right">{item
                  .createdAt
                  .substring(0, 10)}</small><br/>
              <small className="float-right">{item
                  .createdAt
                  .substring(11, 16)}</small>
            </a>

            <div
              id={item.id}
              className="collapse"
              role="tabpanel"
              aria-labelledby="headingOne">
              <div className="card-block">
                {this.generateItems(item.todoItems, item.id)}
                <form onSubmit={(e) => this.addItem(e, item.id)}>
                  <input type="text" placeholder="add new content" onChange={this.getPost}/>
                </form>
                <button
                  onClick={() => this.deleted(item.id)}
                  className="del-btn rounded-circle btn float-right">
                  <i className="fa fa-trash fa-1x" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  fetchList = async() => {
    const req = await fetch(URL, {method: 'GET'});
    const data = await req.json();
    this.setState({list: data});
  }

  componentDidMount() {
    this.fetchList();
    console.log(this.state.post);
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
            {this.generateList(this.state.list)}
            <Footer/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
