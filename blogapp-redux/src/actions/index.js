import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async function(dispatch) {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response
    });
  };
};
