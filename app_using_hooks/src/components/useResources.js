import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const responese = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(responese.data);
  };

  useEffect(() => {
    setResources([]);
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
