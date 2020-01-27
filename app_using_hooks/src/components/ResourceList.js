import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  if (!resources.length) {
    return (
      <div className="ui inverted segment">
        <div classNam="ui inverted relaxed divided list">
          <div class="ui segment">
            <p></p>
            <div class="ui active dimmer">
              <div class="ui loader"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ui inverted segment">
      <div classNam="ui inverted relaxed divided list">
        {resources.map(post => (
          <div className="item">
            <div className="content">
              <div className="header">
                <a href="#">{post.title}</a>
              </div>
              <p>{resource === "posts" ? post.body : null}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
