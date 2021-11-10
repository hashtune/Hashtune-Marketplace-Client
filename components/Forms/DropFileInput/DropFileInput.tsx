import React from "react";
import PropTypes from "prop-types";
import styles from "./DropFileInput.module.scss";
import image from "next/image";

const DropFileInput = (props) => {
  return (
    <div className="input__group">
      <label htmlFor="">Upload Audio Files</label>
      <div className={styles["drop-file-input"] + " " + "text_input"}>
        <div className={styles["drop-file-input__label"]}>
          <svg fill="#fff">
            <use xlinkHref={`/dist/icons/sprite.svg#hashtune-upload-music`} />
          </svg>
          <p>
            Drag and drop your music here, We support Logic Pro X, Ableton wav,
            .aiff, and .flac files up to 500 MB
          </p>
        </div>
        <input type="file" className="" name="audio_files" id="" />
      </div>
    </div>
  );
};

DropFileInput.propTypes = {};

export default DropFileInput;
