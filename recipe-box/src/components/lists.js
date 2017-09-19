import React, {Component} from 'react';

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: '',
      ing: '',
      lists: [],
      list: [
        {
          food: '',
          ingredients: []
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

    this.cancel = this
      .cancel
      .bind(this);

  }

  componentDidMount() {
    console.log(this.state.lists);

    // let memory = JSON.stringify(this.state.list); let memorys =
    // JSON.stringify(this.state.lists); if (memorys) {}
    // localStorage.setItem('_emasys_', memory); let retrieve =
    // localStorage.getItem('_emasys_'); const x = JSON.parse(retrieve);
    // this.setState({lists: retrieve}); console.log(this.state.lists);

  }

  showForm() {
    this.setState({status: 'show'})
  }
  cancel() {
    this.setState({status: 'hide'})
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

    if (item.food !== '') {

      list.push(item);
      let memory = JSON.stringify(list);
      localStorage.setItem('_emasys_', memory);
      let retrieve = (localStorage.getItem('_emasys_'))
      // const x = JSON.parse(retrieve); this.setState({lists: retrieve});
      this.setState({
        lists: JSON.parse(retrieve)
      })

    } else {
      item = {
        food: 'No title',
        ingredients: []
      }

      list.push(item);

    }
    this.setState({title: '', ing: ''})

    console.log("submitted")
    this.reset();
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
    this.setState({edit: false})
  }
  generateList() {
    let list = this.state.list;

    if (list) {
      return (
        <ul className="collapsible" data-collapsible="accordion">
          {list.map((item, id) => {
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
          href="#form"
          className="btn-floating btn-small btnSpace waves-effect waves-light red right"
          onClick={this.showForm}>
          <i className="material-icons">add</i>
        </a>
        <div className={`row ${this.state.status}`} id="form">
          <form className="col s12" onSubmit={this.handleForm}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  defaultValue={this.state.title}
                  type="text"
                  className="validate"
                  onChange={this.setTitle}/>
                <label className="active">Food title</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  defaultValue={this.state.ing}
                  className="materialize-textarea"
                  onChange={this.setIngredients}></textarea>
                <label >separate your list with ,</label>
              </div>
            </div>

            <button className="btn waves-effect waves-light red" type="submit">Submit
              <i className="material-icons right">send</i>
            </button>
            <button
              className="btn waves-effect waves-light right red "
              onClick={this.cancel}
              type="button">cancel
              <i className="material-icons right">cancel</i>
            </button>
          </form>
        </div>
      </div>

    );
  }
}

export default Lists;