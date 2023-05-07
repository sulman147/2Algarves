"use client";
import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  { src: "/images/1.jpg", width: 800, height: 600 },
  { src: "/images/2.jpg", width: 1600, height: 900 },
  { src: "/images/3.jpg", width: 800, height: 600 },
  { src: "/images/4.jpg", width: 1600, height: 900 },
  { src: "/images/5.jpg", width: 800, height: 600 },
  { src: "/images/6.jpg", width: 1600, height: 900 },
  { src: "/images/7.jpg", width: 800, height: 600 },
  { src: "/images/8.jpg", width: 1600, height: 900 },
  { src: "/images/9.jpg", width: 1600, height: 900 },
];

const Gallery = ({}) => {
  const [index, setIndex] = useState(-1);
  return (
    <div className="col-span-4 flex flex-col gap-4 p-1.5 rounded-lg border-2 border-solid">
      <div
        className="
          flex 
          items-center 
          justify-around
          font-semibold
          text-lg
          mt-3
        "
      >
        Gallery
      </div>

      <hr />
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default Gallery;
