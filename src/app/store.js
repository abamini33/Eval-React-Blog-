import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postsSlice";
import commentReducer from "../features/commentsSlice";

export default configureStore({
	reducer: {
		posts: postReducer,
		comments: commentReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
