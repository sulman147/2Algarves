"use client";
import { useState, useEffect } from "react";

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

let photos = [];
let photos2 = [];

const Gallery = ({ Gallery }) => {
  useEffect(() => {
    if (Gallery.length > 6) {
      let newphotos = Gallery.slice(0, 6);
      let newphotos2 = Gallery;
      for (let i = 0; i < newphotos.length; i++) {
        photos.push({
          src: `${newphotos[i].image}`,
          width: 800,
          height: 600,
        });
      }
      for (let i = 0; i < newphotos2.length; i++) {
        photos2.push({
          src: `${newphotos2[i].image}`,
          width: 800,
          height: 600,
        });
      }
    } else {
      let newphotos = Gallery;
      let newphotos2 = Gallery;
      for (let i = 0; i < newphotos.length; i++) {
        photos.push({
          src: `${newphotos[i].image}`,
          width: 800,
          height: 600,
        });
      }
      for (let i = 0; i < newphotos2.length; i++) {
        photos2.push({
          src: `${newphotos2[i].image}`,
          width: 800,
          height: 600,
        });
      }
    }
  }, []);

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
          photos={photos}
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
        slides={photos2}
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
