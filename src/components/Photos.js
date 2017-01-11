import React, { Component } from 'react';
import kiss from '../assets/kiss.jpg';
import lenaBeach from '../assets/lena-beach.jpg';
import seriousBeach from '../assets/serious-beach.jpg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import vovaBeach from '../assets/vova-beach.jpg';

export default class Photos extends Component {
    renderImages() {
        const images = [
            { img: kiss, caption: 'Love' },
            { img: lenaBeach, caption: 'Liebe' },
            { img: img1, caption: 'Karlek' },
            { img: img2, caption: 'Cinta' },
            { img: img3, caption: 'Szerelem' },
            { img: vovaBeach, caption: 'Amore' },
            { img: seriousBeach, caption: 'Любовь' },
            { img: img4, caption: 'Rakkaus' },
            { img: img5, caption: 'L\'amour' }
        ];

        return images.map(({ img, caption }, i) => (
                <div key={`photo${i}`}>
                    <img src={img} alt={caption} />
                    <h3>{caption}</h3>
                </div>
        ));
    }

    render() {
        return (
            <div className="photos">
                {this.renderImages()}
            </div>
        );
    }
}
