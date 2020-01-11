import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async function(dispatch) {
    const response = await jsonPlaceholder.get("/posts");
    console.log("from action posts: ", response.data);
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };
};

export const fetchUsers = () => {
  return async function(dispatch) {
    const response = await jsonPlaceholder.get("/users");
    console.log("from action users: ", response.data);
    dispatch({
      type: "FETCH_USERS",
      payload: response.data
    });
  };
};
