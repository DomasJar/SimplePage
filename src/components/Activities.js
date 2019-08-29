import React, {Component} from 'react';
import classNames from "classnames";

class Activities extends Component {
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
                    <p className={classNames("hidden-parent", {"o--expand-up": !this.state.visible})}>Activities</p>
                    <div className={classNames("hidden", {"o--expand-down-lg": !this.state.visible})}>
                        <p>Currently I'm studying Aviation Engineering and working part time job as an expeditor</p>
                        <p>Producing music and programming are my main hobbies</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Activities;