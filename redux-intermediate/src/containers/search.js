import React, {Component} from 'react';
import {getCar} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }

        this.getInput = this
            .getInput
            .bind(this);
        this.handleForm = this
            .handleForm
            .bind(this);
    }

    handleForm(e) {
        e.preventDefault()
        this
            .props
            .getCar(this.state.keyword);
    }

    componentDidMount() {
        console.log(this.state);
    }

    getInput(e) {
        this.setState({keyword: e.target.value})
    }

    render() {
        return (
            <div className="main_search">
                <form onSubmit={this.handleForm}>
                    <input type="text" value={this.state.keyword} onChange={this.getInput}/>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        getCar
    }, dispatch)
})

export default connect(null, mapDispatchToProps)(Search);