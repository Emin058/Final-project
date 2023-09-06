const initialState = JSON.parse(localStorage.getItem("Blog")) || [];

export const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.payload];
    case "REMOVE_BLOG":
      return state.filter((item) => item.id !== action.payload);
    case "EDIT_BLOG":
      const myBlogForEdited = action.payload;

      const updatedBlogsArray = state.map((item) => {
        if (item.id === myBlogForEdited.id) {
          return myBlogForEdited;
        } else {
          return item;
        }
      });

      return (state = updatedBlogsArray);
    default:
      return state;
  }
};
