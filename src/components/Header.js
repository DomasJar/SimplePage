import React, {Component} from 'react';
import classNames from "classnames";
import SimpleBar from "simplebar";

import './Components.css';

let sBar;
class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            prevScrollpos: 0,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        sBar = new SimpleBar(document.getElementById('myBar'), '');
        sBar.getScrollElement().addEventListener('scroll', this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        sBar.getScrollElement().removeEventListener('scroll', this.handleScroll);
    }
    // Hide or show the menu.
    handleScroll = () => {
        const {prevScrollpos} = this.state;
        const currentScrollpos = sBar.getScrollElement().scrollTop;
        const visible = prevScrollpos > currentScrollpos;
        this.setState({
            prevScrollpos: currentScrollpos,
            visible
        });
    };

    render() {
        return (
            <nav className={classNames("navbar", {"navbar--hidden": !this.state.visible})}>
                <h1 className={"nav-item"}>DomasJar</h1>
            </nav>
        );
    }
}

export default Header;