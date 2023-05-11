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
import { BiCategoryAlt } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";

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
const photos2 = [
  { src: "/images/1.jpg", width: 800, height: 600 },
  { src: "/images/2.jpg", width: 800, height: 600 },
  { src: "/images/3.jpg", width: 800, height: 600 },
  { src: "/images/4.jpg", width: 800, height: 600 },
  { src: "/images/5.jpg", width: 800, height: 600 },
  { src: "/images/6.jpg", width: 800, height: 600 },
];

const Gallery = ({}) => {
  const [index, setIndex] = useState(-1);
  return (
    <div className="flex flex-col bg-white rounded-xl mt-3">
      <div className="flex flex-row items-center my-2 ml-6 gap-4 ">
        <GrGallery size={20} />
        <div
          className="
        flex
        font-semibold
        text-xl
        items-center
      "
        >
          Gallery
        </div>
      </div>

      <hr />
      <div className="p-2">
        <PhotoAlbum
          layout="columns"
          photos={photos2}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
      </div>
      <hr />
      <div className="flex justify-center mb-2 mt-2">
        <div
          onClick={() => setIndex(1)}
          className="
            hidden
            w-50
            md:block
            text-sm 
            text-white
            font-semibold 
            py-2 
            px-4
            bg-pink-750
            rounded-lg 
            hover:bg-orange-700 
            hover:text-white 
            transition
            cursor-pointer
          "
        >
          View More
        </div>
      </div>
      {/* <button onClick={() => setIndex(1)}> </button> */}
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
