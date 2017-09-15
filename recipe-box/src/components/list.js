import React from 'react';

const generateList = ({list}) => {
  let id = 0;
  if (list) {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        {list.map((item) => {
          id++;
          return (
            <li key={id}>
              <div className="collapsible-header">
                {item.food}
              </div>
              <div className="collapsible-body">
                <ul className="collection">
                  {item
                    .ingredients
                    .map((ingredient) => {
                      return (
                        <li className="collection-item" key={ingredient}>{ingredient}</li>
                      )
                    })
}

                  <a
                    className="btn-floating btn-small btnSpace waves-effect waves-light red right ">
                    <i className="material-icons">delete_forever</i>
                  </a>
                  <a
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
const List = (props) => {
  return (
    <div>
      {generateList(props)}
    </div>
  );
}

export default List;