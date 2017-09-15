import React from 'react';

const handleForm = (e) => {
  e.preventDefault();

  console.log("submitted")
  changeStatus();
}

const changeStatus = (props) => {
  console.log(props)
}
const Form = (props) => {
  return (
    <div className={`row ${props.status}`}>
      <form className="col s12" onSubmit={handleForm}>
        <div className="row">
          <div className="input-field col s12">
            <input id="first_name2" type="text" className="validate"/>
            <label className="active">Food title</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea"></textarea>
            <label >separate your list with ,</label>
          </div>
        </div>

        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
}

export default Form;