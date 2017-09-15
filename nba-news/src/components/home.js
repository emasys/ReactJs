import React, {Component} from 'react';

//components
import Featured from './featured';
import Subscribe from './subscribe';
import Blocks from './blocks';

const URL_HOME = ' http://localhost:3001/home';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: ''
        };
    }

    componentDidMount = async() => {
        const res = await fetch(URL_HOME, {method: 'GET'});
        const data = await res.json();
        this.setState({home: data})
    }
    render() {
        return (
            <div>
                <Featured slides={this.state.home.slider}/>
                <Subscribe/>
                <Blocks blocks ={this.state.home.blocks}/>
            </div>
        );
    }
}

export default Home;