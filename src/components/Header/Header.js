import React from "react";
import { useDataContext } from "../../hooks/useDataContext";
import "./Header.css";
const Header = () => {
  const { images, setImages, count, setCount } = useDataContext();
  const handleDelete = () => {
    const updateImages = images.filter((dt) => dt.isChecked != true);
    setImages(updateImages);
    setCount(0)
  };
  return (
    <div className="container">
      <div className="header bg-white">
        <div className="bg-white">
          {count > 0 ? (
            <div className="bg-white files-counter pb-2">
              <input
                type="checkbox"
                checked={count > 0 ? true : false}
                className="mt-1"
                readOnly
              />
              <h5 className="bg-white my-1">{count} Files Selected</h5>
            </div>
          ) : (
            <div className="bg-white">

              <h5 className="bg-white gallery pb-2">Gallery</h5>
            </div>
          )}
        </div>
        <div className="delete" onClick={handleDelete}>
          Delete files
        </div>
      </div>
    </div>
  );
};

export default Header;
