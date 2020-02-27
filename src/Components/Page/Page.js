import React from 'react';
import Gallery from 'react-photo-gallery';

const photos = [
    {
      src: require(''),
      width: 4,
      height: 3
    },
    {
      src: require(''),
      width: 1,
      height: 1
    },
    {
        src: require(''),
        width: 1,
        height: 1
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