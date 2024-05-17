import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Photo } from '../Types/types'

import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
    photos: Photo[];
    openModal: () => void;
    getCard: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal, getCard }) => {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <li className={css.listItem} key={photo.id}>
          <ImageCard photo={photo} openModal={openModal} getCard={getCard} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;