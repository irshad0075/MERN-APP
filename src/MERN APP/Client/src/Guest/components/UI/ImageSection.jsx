import React, { useState } from "react";

export default function ImageSection({ images }) {
  const [thumbnail, setThumbnail] = useState(images[0]);

  const changeImage = (index) => {
    setThumbnail(images[index]);
  };

  return (
    <>
      <div className="d-flex align-items-center gap-5 border bg-white p-3 ">
        {images.map((val, key) => (
          <div
            onClick={() => changeImage(key)}
            key={key}
            className={thumbnail === val ? "border border-dark" : null}
          >
            <img
              className="img-fluid"
              src={val}
              alt={`thumbnail${key}`}
              style={{ height: "100px" }}
            />
          </div>
        ))}
      </div>
      <div className="container w-75">
        <img
          src={thumbnail}
          alt=""
          className="img-fluid mb-2  img-fluid object-fit-contain"
          style={{ height: "390px" }}
        />
      </div>
    </>
  );
}
