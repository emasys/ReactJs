import React, {Component} from 'react';

const URL_TEAM = ' http://localhost:5001/teams';
class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this.renderTeam = this
            .renderTeam
            .bind(this);
    }

    componentDidMount = async() => {
        const res = await fetch(`${URL_TEAM}?name=${this.props.match.params.id}`, {method: 'GET'});
        const data = await res.json();
        this.setState({data: data})
    }

    renderSquad = (squad) => {
        return squad.map((item, index) => {
            return (
                <div key={index} className="item player_wrapper">
                    <img src={`/images/avatar.png`} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <div className="node">
                        <span>Number:</span>{item.number}
                    </div>
                    <div className="node">
                        <span>PPG:</span>{item.PPG}
                    </div>
                    <div className="node">
                        <span>APG:</span>{item.APG}
                    </div>
                    <div className="node">
                        <span>RPG:</span>{item.RPG}
                    </div>

                </div>
            )
        });

    }
    renderTeam = ({data}) => {
        return data.map((item) => {
            return (
                <div className="team_data_wrapper" key={item.id}>
                    <div className="left">
                        <img src={`/images/teams/${item.logo}`} alt={item.name}/>
                    </div>
                    <div className="right">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <hr/>
                        <div className="squad">
                            {this.renderSquad(item.squad)}
                        </div>
                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div className="team_data">
                {this.renderTeam(this.state)}
            </div>
        );
    }
}

export default Team;