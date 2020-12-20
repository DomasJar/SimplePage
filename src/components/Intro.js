import React, {Component} from 'react';

import './Components.css'
import classNames from "classnames";

class Intro extends Component {
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
            <div  onMouseOver={this.onFade} onMouseOut={this.onFade} className={"list-parent-component"} >
                <div >
                    <p className={classNames("hidden-parent", {"o--expand-up": !this.state.visible})}>Hello</p>
                    <div className={classNames("hidden", {"o--expand-down-lg": !this.state.visible})}>
                        <p>My name is Dominykas</p>
                        <p>I am a 22 year old freelancer from Lithuania</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
