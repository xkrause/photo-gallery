import React from 'react';
import Gallery from 'react-photo-gallery';

const photos = [
    {
        src: require('../../img/rocks.jpg'),
        width: 6,
        height: 7
    },
    {
        src: require('../../img/apple.jpg'),
        width: 4,
        height: 3
    },
    {
        src: require('../../img/rocks-close.jpg'),
        width: 6,
        height: 7
    },
    {
        src: require('../../img/food.jpg'),
        width: 4,
        height: 6
    },
    {
        src: require('../../img/nerf-arsenal.jpg'),
        width: 6,
        height: 7
    }
  ];

  const wide = [
    {
        src: require('../../img/me.jpg'),
        width: 7,
        height: 4
    }
  ]

class Page extends React.Component {
    render() {
        return (
            <div>
                <Gallery photos = {photos} />
                <Gallery photos = {wide} />
            </div>
        );
    }
}

export default Page;