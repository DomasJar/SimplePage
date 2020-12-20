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
                    <div className={classNames("hidden", {"o--expand-down-xlg": !this.state.visible})}>
                        <p>I've been working for Shapescape as a gameplay developer since March of 2020</p>
                        <p>I used to code in various programming languages(Java, C++, Javascript) as a hobby before that</p>
                        <p> Since it became my job I usualy spend my free time making all sorts of diy projects, producing music and fixing my "race" car</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Activities;
