import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/posts"
	);
	const postsData = response.data;

	const usersResponse = await axios.get(
		"https://jsonplaceholder.typicode.com/users"
	);
	const usersData = usersResponse.data;

	const posts = postsData.map((post) => {
		const user = usersData.find((user) => user.id === post.userId);
		return {
			...post,
			author: user.name,
		};
	});

	return posts;
});

export const fetchPostById = createAsyncThunk(
	"posts/fetchPostById",
	async (data) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${data}`
		);
		const post = response.data;

		const userResponse = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${post.userId}`
		);
		const user = userResponse.data;

		post.author = user.name;

		return post;
	}
);

export const addNewPost = createAsyncThunk("posts/addNewPost", async (post) => {
	const response = await axios.post(
		"https://jsonplaceholder.typicode.com/posts",
		post
	);
	const newPost = response.data;

	return newPost;
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

		builder
			.addCase(fetchPostById.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchPostById.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.post = action.payload;
			})
			.addCase(fetchPostById.rejected, (state, action) => {
				console.error(
					"Failed to fetch post by id: ",
					action.error.message
				);
				state.status = "failed";
				state.error = action.error.message;
			});

		builder
			.addCase(addNewPost.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.posts.push(action.payload);
				state.post = {
					title: "",
					body: "",
					userId: 1,
					id: id++,
				};
			})
			.addCase(addNewPost.rejected, (state, action) => {
				console.error("Failed to add new post: ", action.error.message);
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { setPostValue } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;
export const selectPost = (state) => state.posts.post;
