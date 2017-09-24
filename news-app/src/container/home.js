import React, {Component} from 'react';
import {connect} from 'react-redux';
import {latestNews, otherNews, gallery} from '../actions';
import {bindActionCreators} from 'redux';

//component
import LatestNews from '../components/home/latest';
import OtherNews from '../components/home/other';
import Gallery from '../components/home/gallery';

class Home extends Component {
    componentDidMount() {
        this
            .props
            .latestNews()

        this
            .props
            .otherNews();

        this
            .props
            .gallery();
    }

    render() {
        return (
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews other={this.props.articles.other}/>
                <Gallery gallery={this.props.galleries.galleries}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {articles: state.articles, galleries: state.galleries}
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        latestNews,
        otherNews,
        gallery
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);