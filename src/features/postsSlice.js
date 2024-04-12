import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);
	return response.data;
});

let id = 101;

const postsSlice = createSlice({
	name: "posts",
	initialState: {
		post: {
			title: "",
			body: "",
			userId: 1,
			id: id++,
		},
		posts: [],
		status: "idle",
		error: null,
	},
	reducers: {
		setPostValue: (state, action) => {
			// state.post[action.payload.name] = action.payload.value;
			state.post = {
				...state.post,
				[action.payload.name]: action.payload.value,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.posts = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				console.error("Failed to fetch posts: ", action.error.message);
				state.status = "failed";
				state.error = action.error.message;
			});

		/* builder
			.addCase(addNewPost.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.posts.push(action.payload);
			})
			.addCase(addNewPost.rejected, (state, action) => {
				console.error("Failed to add new post: ", action.error.message);
				state.status = "failed";
				state.error = action.error.message;
			}); */
	},
});

export const { setPostValue } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;
