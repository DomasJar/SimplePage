import React, {Component} from 'react';
import classNames from "classnames";

class Media extends Component {
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
                    <p className={classNames("hidden-parent", {"o--expand-up": !this.state.visible})}>Media</p>
                    <div className={classNames("hidden", {"o--expand-down-sm": !this.state.visible})}>
                        <div className={"mcontainer-flex-row"}>
                            <img className={"pad-lr icon"} src={'res/Ig-logo_May2016.png'} alt={"ig_icon"} onClick={()=> window.open("https://www.instagram.com/domasjar/", "_blank")}></img>
                            <img className={"pad-lr icon-lg"} src={"res/soundcloud_icon.png"} alt={"sc_icon"} onClick={()=> window.open("https://soundcloud.com/domasjar", "_blank")}></img>
                            <img className={"pad-lr icon"} src={'res/Spotify_Icon_CMYK_Black.png'} alt={"spotify_icon"} onClick={()=> window.open("https://open.spotify.com/artist/5eDqoeZQwEBOIsCeMH1KRd?si=XOVeWx8ASAKRRgPONn4CbQ", "_blank")}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Media;