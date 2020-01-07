import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedlist = videos.map(video => (
    <VideoItem
      key={video.snippet.title}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return <div className="ui relaxed divided list">{renderedlist}</div>;
};

export default VideoList;
