import jsonPlaceholder from "../api/jsonPlaceholder";
// import _ from "loadash";
export const fetchPosts = () => {
  console.log("from action posts: ");
  return async function(dispatch) {
    const response = await jsonPlaceholder.get("/posts");
    console.log("from action posts: ", response.data);
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };
};

export const fetchUsers = id => dispatch => {
  _fetchUser(id, dispatch);
};
const _fetchUser = async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USERS",
    payload: response.data
  });
};
