import React, {Component} from 'react';
import {selectedNews, clearNews} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class News extends Component {
    componentDidMount() {
        this
            .props
            .selectedNews(this.props.match.params.id);
    }

    componentWillUnmount() {
        this
            .props
            .clearNews();
    }

    render() {
        return (
            <div>
                Articles
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        selectedNews,
        clearNews
    }, dispatch)
})

const mapStateToProps = (state) => {
    console.log(state);
    return {news: state.news}
}
export default connect(mapStateToProps, mapDispatchToProps)(News);