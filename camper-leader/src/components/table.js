import React, {Component} from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: '',
            button: 'Sort By All Time'
        };
    }

    componentDidMount = async() => {
        let URL_USERS = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
        const res = await fetch(URL_USERS, {method: 'GET'})
        const json = await res.json();
        this.setState({list: json, button: 'Sort By All Time'})

    }

    sortStuff = () => {
        let sorted = this
            .state
            .list
            .sort((a, b) => {
                return b.alltime - a.alltime;
            });
        this.setState({list: sorted, button: 'Sort by last 30 days'});
    }

    getList = () => {

        let x = this.state.list;

        if (x) {
            return (x.map((items) => {

                return (
                    <ul className="collection" key={items.username}>
                        <li className="collection-item avatar">
                            <img src={items.img} alt="" className="circle"/>
                            <span className="title">{items.username}</span>
                            <p>
                                <b>Recently:</b>
                                {items.recent}
                                <br/>
                                <b>All time point:</b>
                                {items.alltime}
                            </p>

                        </li>
                    </ul>
                )
            }))
        }
    }

    render() {
        return (
            <div>
                <div className="fixed-action-btn toolbar">
                    <a className="btn-floating btn-large black">
                        +
                    </a>
                    <ul className="black">
                        <li className="waves-effect waves-light">
                            <a href="#!" onClick={this.sortStuff}>
                                sort by all time
                            </a>
                        </li>
                        <li className="waves-effect waves-light">
                            <a href="#!" onClick={this.componentDidMount}>
                                sort by last 30 days
                            </a>
                        </li>

                    </ul>
                </div>
                {this.getList()}
            </div>
        );
    }
}

export default Table;