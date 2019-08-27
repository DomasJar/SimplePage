import React, {Component} from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselMy" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselMy" data-slide-to="0" className="active"/>
                    <li data-target="#carouselMy" data-slide-to="1"/>
                    <li data-target="#carouselMy" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="600"
                             height="400" xmlns="http://www.w3.org/2000/svg"
                             preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                             aria-label="First slide"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#315477"/>
                            <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                        </svg>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="600"
                             height="400" xmlns="http://www.w3.org/2000/svg"
                             preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                             aria-label="Second slide"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#5f3666"/>
                            <text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
                        </svg>
                    </div>
                    <div className="carousel-item">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="600"
                             height="400" xmlns="http://www.w3.org/2000/svg"
                             preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                             aria-label="Third slide"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#552d2d"/>
                            <text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;