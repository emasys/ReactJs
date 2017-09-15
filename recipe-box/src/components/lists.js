import React, {Component} from 'react';

let retrieve = localStorage.getItem('_emasys_');
class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: '',
      ing: '',
      lists: retrieve,
      list: [
        {
          food: 'demo',
          ingredients: ['water']
        }, {
          food: 'demo2',
          ingredients: ['water', 'vegetable oil']
        }
      ],
      status: 'hide'
    };

    this.showForm = this
      .showForm
      .bind(this);

    this.handleForm = this
      .handleForm
      .bind(this);

    this.setIngredients = this
      .setIngredients
      .bind(this);
    this.setTitle = this
      .setTitle
      .bind(this);

    this.editTitle = this
      .editTitle
      .bind(this);

    this.edit = this
      .edit
      .bind(this);

    this.editPanel = this
      .editPanel
      .bind(this);

    this.delete = this
      .delete
      .bind(this);

    this.reset = this
      .reset
      .bind(this);

  }

  componentDidMount() {

    let memory = JSON.stringify(this.state.list);
    let memorys = JSON.stringify(this.state.lists);
    if (memorys) {}
    localStorage.setItem('_emasys_', memory);
    let retrieve = localStorage.getItem('_emasys_');
    // const x = JSON.parse(retrieve);
    this.setState({lists: retrieve})
    console.log(this.state.lists);

  }

  showForm() {
    this.setState({status: 'show'})
  }
  handleForm(e) {
    e.preventDefault();
    this.setState({status: 'hide'});
    let list = this.state.list,
      title = this.state.title,
      ing = this.state.ing,
      item = {
        food: title,
        ingredients: ing
      };

    list.push(item);
    console.log("submitted")
  }

  setTitle(e) {
    this.setState({title: e.target.value});
  }

  setIngredients(e) {
    let ing = e.target.value;
    ing = ing.split(',');
    this.setState({ing: ing});

  }

  reset() {
    this.setState({title: '', ing: ''});
    console.log("mouse out")
  }
  editTitle(e) {
    e = e || window.event;
    e = e.target || e.srcElement;

    let title = document
        .getElementById(e.id)
        .innerText,
      list = this.state.list,
      ing = '';
    for (let i = 0; i < list.length; i++) {
      if (title === list[i].food) {
        ing = list[i].ingredients;
      }
    }

    this.setState({title: title, ing: ing});
    console.log("mouse in");
  }

  editPanel() {
    this.setState({edit: true})
  }
  edit() {
    let title = this.state.title,
      ing = this.state.ing,
      list = this.state.list;

    for (let i = 0; i < list.length; i++) {
      if (title === list[i].food) {
        list[i].ingredients = ing;
        this.setState({edit: false})
      }
    }
  }

  delete() {

    let title = this.state.title,
      list = this.state.list;

    for (let i = 0; i < list.length; i++) {
      if (list[i].food === title) {
        list.splice(i, 1);
        console.log("deleted");
        break;
      } else {
        console.log("nothing to delete");

      }
    }
    this.componentDidMount();
    // this.save();

  }
  generateList() {
    let id = 1,
      v = JSON.parse(this.state.lists),
      list = this.state.list;
    console.log(v);

    if (v) {
      return (
        <ul className="collapsible" data-collapsible="accordion">
          {list.map((item) => {
            id++;
            return (
              <li key={id}>
                <div className="collapsible-header" id={id} onClick={this.editTitle}>
                  {item.food}
                </div>
                <div className="collapsible-body">
                  <div
                    className={`row ${this.state.edit
                    ? "show"
                    : "hide"}`}>
                    <form className="col s12" onSubmit={this.edit}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input disabled type="text" className="validate" onChange={this.setTitle}/>
                          <label className="active">{this.state.title}</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="input-field col s12">
                          <textarea
                            value={this.state.ing}
                            className="materialize-textarea"
                            onChange={this.setIngredients}></textarea>
                        </div>
                      </div>

                      <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                      </button>
                    </form>
                  </div>
                  <ul
                    className={`collection ${this.state.edit
                    ? "hide"
                    : "show"}`}>
                    {item
                      .ingredients
                      .map((ingredient) => {
                        return (
                          <li className="collection-item" key={ingredient}>{ingredient}</li>
                        )
                      })
}

                    <a
                      onClick={this.delete}
                      className="btn-floating btn-small btnSpace waves-effect waves-light red right ">
                      <i className="material-icons">delete_forever</i>
                    </a>
                    <a
                      onClick={this.editPanel}
                      className="btn-floating btn-small btnSpace waves-effect waves-light red right ">
                      <i className="material-icons">mode_edit</i>
                    </a>

                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      )
    }
  }
  render() {
    return (
      <div>
        {this.generateList()}
        <a
          className="btn-floating btn-small btnSpace waves-effect waves-light red right"
          onClick={this.showForm}>
          <i className="material-icons">add</i>
        </a>
        <div className={`row ${this.state.status}`}>
          <form className="col s12" onSubmit={this.handleForm}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="first_name2"
                  type="text"
                  className="validate"
                  onChange={this.setTitle}/>
                <label className="active">Food title</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  onChange={this.setIngredients}></textarea>
                <label >separate your list with ,</label>
              </div>
            </div>

            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>

    );
  }
}

export default Lists;