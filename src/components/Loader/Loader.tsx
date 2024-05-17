import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";

interface LoaderProps {
    status: boolean;
}

const Loader: React.FC<LoaderProps> = ( { status }) => {
    return (
        <div className={css.loader}>
             <ClipLoader
        
        color={'#36d7b7'}
        loading={status}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
       
      />
        </div>
    );
};
export default Loader;