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
            <div  onMouseOver={this.onFade} onMouseOut={this.onFade} className={"list-parent-component"} >
                <div >
                    <p className={classNames("hidden-parent", {"o--expand-up": !this.state.visible})}>Contact</p>
                <div className={classNames("hidden", {"o--expand-down-md": !this.state.visible})}>
                    <p>Feel free to contact me if needed</p>
                    <p>domasjava@hotmail.com</p>
                </div>
                </div>
            </div>
        );
    }
}

export default ContactMe;