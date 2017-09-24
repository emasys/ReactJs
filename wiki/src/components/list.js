import React from 'react';

const getSolution = ({solution}) => {
    solution.map((result, id) => {
        return (
            <div className="list">
                <div
                    className="card "
                    style={{
                    zIndex: '5'
                }}>
                    <div className="card-header">
                        <h3 >{solution.expression
                                ? solution.expression
                                : 'Question'}</h3>

                    </div>
                    <div className="card-block">
                        <span id="type">{solution.operation}</span>
                        <span id="result">solution</span>

                        <h5 className="card-text">
                            {solution.result
                                ? solution.result
                                : 'Answer'}
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