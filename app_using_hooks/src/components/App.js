import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container">
      <div style={{ marginTop: "10px" }}>
        <button className="ui button red" onClick={() => setResource("posts")}>
          Posts
        </button>
        <button
          className="ui button green"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
