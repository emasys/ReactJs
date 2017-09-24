import React from 'react';

const getSolution = ({solution}) => {
    console.log(solution);
    return solution.map((result, id) => {
        return (

            <div className="list" key={id}>
                {console.log(result)}
                <div
                    className="card "
                    style={{
                    zIndex: '5'
                }}>
                    <div className="card-header">
                        <h3 >{result.expression}</h3>

                    </div>
                    <div className="card-block">
                        <span id="result">{result.operation}</span>

                        <h5 className="card-text">
                            {result.result}
                        </h5>
                    </div>
                </div>
            </div>
        )
    })

}
const List = (props) => {
    return (
        <div>
            {getSolution(props)}
        </div>
    );
}

export default List;