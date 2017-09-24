import React, {Component} from 'react';

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: false,
            success: false
        };

        this.saveList = this
            .saveList
            .bind(this);
        this.handleForm = this
            .handleForm
            .bind(this);
        this.onChangedInput = this
            .onChangedInput
            .bind(this);
    }

    saveList = async(email) => {
        const URL_EMAIL = ' http://localhost:5001/subcriptions';
        const res = await fetch(URL_EMAIL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        });
        this.setState({email: ''});
    }

    handleForm = (e) => {
        e.preventDefault();
        let regex = /\S+@\S+\.\S+/,
            email = this.state.email;

        if (regex.test(email)) {
            this.saveList(email);
            this.setState({error: false, success: true})
        } else {
            this.setState({error: true, success: false})
        }

        this.clearMsg();

    }
    onChangedInput = (e) => {
        this.setState({email: e.target.value});
    }

    clearMsg = () => {
        setTimeout(function () {
            this.setState({error: false, success: false})
        }.bind(this), 3000);
    }
    render() {
        return (
            <div className="subcribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleForm}>
                        <input
                            type="text"
                            placeholder="youremail@email.com"
                            value={this.state.email}
                            onChange={this.onChangedInput}/>
                    </form>
                </div>
                <div
                    className={this.state.error
                    ? "error show"
                    : "error"}>
                    check your email address
                </div>
                <div
                    className={this.state.success
                    ? "success show"
                    : "success"}>
                    Thank you!
                </div>
                <small>Lorem culpa eu ex aliquip. Elit eiusmod occaecat quis proident sit
                    nostrud laborum. Pariatur aliqua mollit pariatur cupidatat fugiat aliquip Lorem
                    eu irure Lorem veniam. Mollit aliquip ea id aute. Voluptate enim eiusmod elit
                </small>
            </div>
        );
    }
}

export default Subscribe;