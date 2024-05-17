import React from "react";
import css from "./ImageCard.module.css";
import { Photo } from '../Types/types';


interface ImageCardProps {
    photo: Photo;
    openModal: () => void;
    getCard: (photo: Photo) => void;
  }
  

const ImageCard: React.FC<ImageCardProps> = ({ photo, openModal, getCard }) => {
  const handleClick = () => {
    getCard(photo);
    openModal();
    console.log(photo);
  };

  return (
    <div>
      <img
        className={css.img}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;