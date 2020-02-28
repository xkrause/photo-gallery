import React from 'react';
import Gallery from 'react-photo-gallery';

const row1 = [
    {
        src: require('../../img/blurry-keyboard.JPG'),
        width: 2,
        height: 1
    },
    {
        src: require('../../img/apple.jpg'),
        width: 1,
        height: 1
    },
    {
        src: require('../../img/rocks-close.jpg'),
        width: 3,
        height: 4
    },
    {
        src: require('../../img/food.jpg'),
        width: 2,
        height: 3
    },
    {
        src: require('../../img/nerf-arsenal.jpg'),
        width: 3,
        height: 4
    },
    {
        src: require('../../img/light-lines.JPG'),
        width: 5,
        height: 3
    },
    {
        src: require('../../img/rainy-window.JPG'),
        width: 3,
        height: 4
    },
    {
        src: require('../../img/fence-plant.JPG'),
        width: 7,
        height: 5
    }
  ];

class Page extends React.Component {
    render() {
        return (
            <div>
                <Gallery photos = {row1} direction = {"column"} />
            </div>
        );
    }
}

export default Page;