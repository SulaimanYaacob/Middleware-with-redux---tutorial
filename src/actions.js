import Axios from "axios";

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });

  try {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", error: error });
  }
};

// export const fetchPosts = () => async (dispatch, getState) => {
//   const response = await Axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   dispatch({ type: "FETCH_POSTS", payload: response.data });
// };

// export const fetchPosts = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   return {
//     type: "FETCH_POSTS",
//     payload: response.data,
//   };
// };
