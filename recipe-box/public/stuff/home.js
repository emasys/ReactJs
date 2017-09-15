import React, {Component} from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      status: "hide",
      edit: 'hide',
      body: '',

      list: [
        {
          title: 'demo',
          ingredient: []
        }
      ]
    };

    this.generateList = this
      .generateList
      .bind(this);

    this.getForm = this
      .getForm
      .bind(this);

    this.saveList = this
      .saveList
      .bind(this);

    this.editList = this
      .editList
      .bind(this);

    this.getEditForm = this
      .getEditForm
      .bind(this);

    this.titleClick = this
      .titleClick
      .bind(this);

    this.removeList = this
      .removeList
      .bind(this);
  }

  getForm = () => {
    this.setState({status: 'show'});
  }

  handleForm = (event) => {
    let val = event.target.value;
    this.setState({title: val})
  }

  handleTextArea = (event) => {
    let val = event.target.value;
    let recipe = val.split(',');
    this.setState({body: recipe});

  }

  saveList = () => {
    let title = this.state.title,
      body = this.state.body,
      list = this.state.list;

    let fullStuff = {
      title: title,
      ingredient: body
    };

    list.push(fullStuff);

    this.setState({status: 'hide'})

    // console.log(x);

  }

  titleClick = (e) => {

    e = e || window.event;
    e = e.target || e.srcElement;

    let title = document
      .getElementById(e.id)
      .innerText;
    this.setState({title: title});
  }
  editList = (e) => {

    let body = this.state.body,
      title = this.state.title,
      list = this.state.list;

    for (let i = 0; i < list.length; i++) {

      console.log(title);
      console.log(body);
      if (list[i].title === title) {
        list[i].ingredient = body;
        console.log("updated");
        break;
      } else {
        console.log("unable to update")

      }
    }

    this.setState({edit: 'hide'});

  }

  removeList = () => {
    let body = this.state.body,
      title = this.state.title,
      list = this.state.list;

    for (let i = 0; i < list.length; i++) {
      if (list[i].title === title) {
        list.splice(i, 1);
        console.log("deleted");
        break;
      } else {
        console.log("nothing to delete");

      }
    }
    this.setState({edit: 'hide'});
  }

  getEditForm = () => {
    this.setState({edit: 'show'});
  }
  generateList = () => {
    let id = '0';
    if (this.state.list) {
      return (this.state.list.map((info) => {
        id++;
        return (
          <div key={info.title}>

            <div id="accordion" role="tablist">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <h5 className="mb-0 heading">
                    <a
                      data-toggle="collapse"
                      href={'#' + info.title}
                      id={id}
                      onClick={this.titleClick}
                      aria-expanded="true"
                      aria-controls={info.title}>
                      {info.title}
                    </a>
                  </h5>
                </div>
                <div
                  id={info.title}
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                  data-parent="#accordion">
                  <div className="card-body">
                    <div className={this.state.edit + ' form'}>
                      <div className="form-group">
                        <label className="form-control-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="titleInput"
                          defaultValue={info.title}
                          onChange={this.handleForm}
                          placeholder="title"/>

                      </div>
                      <div className="form-group">
                        <label >Ingredients</label>
                        <textarea
                          className="form-control"
                          id="Textarea"
                          defaultValue={info.ingredient}
                          onChange={this.handleTextArea}
                          placeholder="enter your list items and separate with ,"
                          rows="3"></textarea>
                      </div>
                      <button className="btn btn-outline-dark" onClick={this.editList}>
                        save
                      </button>
                    </div>
                    <ul className="list-group">
                      {info
                        .ingredient
                        .map((ingredient) => {
                          return (
                            <li className="list-group-item" key={ingredient}>{ingredient}</li>
                          )
                        })}
                    </ul>
                    <hr/>
                    <button className="btn btn-outline-dark" onClick={this.getEditForm}>
                      edit
                    </button>
                    &nbsp;
                    <button className="btn btn-outline-dark" onClick={this.removeList}>
                      delete
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )
      }));
    }
  }

  render() {
    return (
      <div className="col-sm-8 col-lg-5">
        {this.generateList()}

        <div className="">

          <div className={this.state.status + ' form'}>
            <div className="form-group">
              <label className="form-control-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="titleInput"
                defaultValue=""
                onChange={this.handleForm}
                placeholder="title"/>
            </div>
            <div className="form-group">
              <label >Ingredients</label>
              <textarea
                className="form-control"
                id="Textarea"
                defaultValue=""
                onChange={this.handleTextArea}
                placeholder="enter your list items and separate with ,"
                rows="3"></textarea>
            </div>
            <button className="btn btn-outline-dark" onClick={this.saveList}>
              save
            </button>
          </div>

        </div>
        <button className="btn btn-outline-dark addBtn" onClick={this.getForm}>Add Recipe</button>

      </div>
    );
  }
}

export default Home;
