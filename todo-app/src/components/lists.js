import React, {Component} from 'react';

const URL = 'http://localhost:8000/api/todos';

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.generateList = this
      .generateList
      .bind(this);

    this.generateItems = this
      .generateItems
      .bind(this);

    this.post = this
      .post
      .bind(this);

    this.deleted = this
      .deleted
      .bind(this);

    this.addItem = this
      .addItem
      .bind(this);
  }

  generateItems = (items, itemId) => {
    return items.map((item, id) => {
      return (
        <div key={id}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{item.content}</li>
          </ul>
          <form onSubmit={this.addItem(itemId)}>
            <input type="text" placeholder="add new content" onChange={this.post}/>
          </form>
        </div>
      )
    });
  }

  post = (e, props) => {
    console.log(e.target.value);
    console.log(props);
  }

  addItem = (id) => {
    fetch(`${URL}/${id}/items`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })
  }

  deleted = (e) => {
    fetch(`${URL}/${e}`, {method: 'DELETE'}).then(res => {
      return window
        .location
        .reload(true);
    })
  }

  generateList = ({list}) => {
    console.log(list);
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

  render() {
    return (
      <div>
        {this.generateList}
      </div>
    );
  }
}

export default Lists;