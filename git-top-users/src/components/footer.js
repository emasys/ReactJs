import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>Made By &nbsp;
                    <a href="https://twitter.com/emasys_nd">eMASYS</a>
                </p>
                <p>

                    <a href="https://github.com/emasys">
                        <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                    </a>

                </p>
            </div>
        );
    }
}

export default Footer;