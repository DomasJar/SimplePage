import React, {Component} from 'react';
import classNames from 'classnames';

import './Components.css'

class ContactMe extends Component {
    constructor (props) {
        super(props);


        this.state = {
            visible: true
        };
    }

    onFade = () => {
        this.setState({
            visible: !this.state.visible
        })
    };

    render() {
        return (
            <div  onMouseOver={this.onFade} onMouseOut={this.onFade} className={"cont"} >
                <div >
                    <p className={classNames("cont-2", {"o--reveal-2": !this.state.visible})}>Contact</p>
                <div className={classNames("hidden", {"o--reveal": !this.state.visible})}>
                    <p>Feel free to contact me if needed</p>
                    <p>placeholder@email.com</p>
                </div>
                </div>
            </div>
        );
    }
}

export default ContactMe;