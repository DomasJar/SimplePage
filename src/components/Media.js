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
            <div  onMouseOver={this.onFade} onMouseOut={this.onFade} className={"cont"} >
                <div >
                    <p className={classNames("cont-2", {"o--reveal-2": !this.state.visible})}>Media</p>
                    <div className={classNames("hidden", {"o--reveal": !this.state.visible})}>
                        <div className={"mcontainer"}>
                            <img className={"pad-lr icon"} src={'res/Spotify_Icon_CMYK_Black.png'} alt={"icon"} onClick={()=> window.open("https://open.spotify.com/artist/5eDqoeZQwEBOIsCeMH1KRd?si=XOVeWx8ASAKRRgPONn4CbQ", "_blank")}></img>
                            <img className={"pad-lr icon"} src={'res/Ig-Logo_May2016.png'} alt={"icon"} onClick={()=> window.open("https://www.instagram.com/domasjar/", "_blank")}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Media;