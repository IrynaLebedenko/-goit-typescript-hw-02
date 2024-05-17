import React, { ReactNode } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
    onClick: () => void;
    children: ReactNode;
} 

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, children }) => {
  return (
    <div className={css.BtnWrap}>
      <button className={css.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default LoadMoreBtn;