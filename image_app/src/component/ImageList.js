import React from "react";

const ImageList = ({ full, thumb }) => {
  return (
    <a href={full} target="_blank" rel="noopener noreferrer">
      <img className="ui fluid rounded image" alt="" src={thumb} />
    </a>
  );
};

export default ImageList;
