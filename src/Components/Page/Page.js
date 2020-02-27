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
        height: 4
    }
  ];

class Page extends React.Component {
    render() {
        return (
            <div>
                <Gallery photos={photos} />
            </div>
        );
    }
}

export default Page;