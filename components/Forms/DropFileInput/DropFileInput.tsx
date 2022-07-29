import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./DropFileInput.module.scss";
import Image from "next/image";

import { UploadedAssetsConfig } from "./UploadedAssetsConfig";
import { bytesToSizeFormatter } from "../../../utils/index";

const DropFileInput = (props: any) => {
  const wrapperRef: any = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("drag_over");
  const onDragLeave = () => wrapperRef.current.classList.remove("drag_over");
  const onDrop = () => wrapperRef.current.classList.remove("drag_over");

  const onFileDrop = (event) => {
    const newFile = event.target.files[0];
    if (newFile) {
      const updatedList: any = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file: [Object]) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <div className="input__group">
      <label htmlFor="">Upload Audio Files</label>
      <div
        ref={wrapperRef}
        className={styles["drop-file-input"] + " " + "text_input"}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className={styles["drop-file-input__label"]}>
          <svg fill="#fff">
            <use xlinkHref="/dist/icons/sprite.svg#hashtune-upload-music" />
          </svg>
          <p>
            Drag and drop your music here, We support Logic Pro X, Ableton wav,
            .aiff, and .flac files up to 500 MB
          </p>
        </div>
        <input
          type="file"
          className=""
          name="audio_files"
          id=""
          onChange={onFileDrop}
        />
      </div>
      {fileList.length > 0 ? (
        <div className={styles["drop-file-preview"]}>
          <p className={styles["drop-file-preview__title"]}>Ready to upload</p>
          <div className={styles["drop-file-preview__items"]}>
            {fileList.map((item, index) => (
              <div key={index} className={styles["drop-file-preview__item"]}>
                <span
                  className={styles["drop-file-preview__item--delete"]}
                  onClick={() => fileRemove(item)}
                >
                  x
                </span>
                <div className={styles["drop-file-preview__item--icon"]}>
                  <Image
                    src={
                      UploadedAssetsConfig[item.type.split("/")[1]].src ||
                      UploadedAssetsConfig["default"].src
                    }
                    alt="Uploaded file"
                    width="50"
                    height="50"
                  />
                </div>

                <div className={styles["drop-file-preview__item--info"]}>
                  <h2>{item.name}</h2>
                  <p>{bytesToSizeFormatter(item.size)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
