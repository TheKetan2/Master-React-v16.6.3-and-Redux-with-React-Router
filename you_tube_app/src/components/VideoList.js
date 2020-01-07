import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedlist = videos.map(video => <VideoItem video={video} />);

  return <div className="ui relaxed divided list">{renderedlist}</div>;
};

export default VideoList;
