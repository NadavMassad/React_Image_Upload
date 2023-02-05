import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { MY_SERVER } from '../../env';
import {
  getImagesAsync,
  image_list,

} from './gallerySlice';
import Upload from './Upload';

export function Gallery() {
  const images = useAppSelector(image_list);
  const dispatch = useAppDispatch();
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [image, setimage] = useState("")

  useEffect(() => {
    console.table(images)
    dispatch(getImagesAsync())
  }, [images.length])


  return (
    <div>
      <h2>Our Gallery</h2>
      {images.map((img, i) =>
        <div key={i}>
          <img src={`http://127.0.0.1:8000${img.image}`} alt={img.title} style={{ width: '100px', height: '100px' }}></img><br />
          {img.title}<br />
          {img.desc}<hr />
        </div>)
      }
    </div >
  );
}
