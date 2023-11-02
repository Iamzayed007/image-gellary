import React from "react";
import { useDataContext } from "../../hooks/useDataContext";
import "./Header.css";
const Header = () => {
  const { images, setImages, count,setCount } = useDataContext();
  const handleDelete = () => {
    const updateImages = images.filter((dt) => dt.isChecked != true);
    setImages(updateImages);
    setCount(0)
  };
  return (
    <div className="header container bg-white">
      <div className="bg-white">
        {count > 0 ? (
          <div className="bg-white files-counter">
              <input
        type="checkbox"
        // className={`${image.isChecked ? "check-box-selected" : "check-box"}`}
        checked={count > 0 ? true : false}
       
      />
            <h5 className="bg-white mt-1">{count} Files Selected</h5>
          </div>
        ) : (
          <h5 className="bg-white">Gallery</h5>
        )}
      </div>
      <div className="delete" onClick={handleDelete}>
        Delete files
      </div>
    </div>
  );
};

export default Header;
