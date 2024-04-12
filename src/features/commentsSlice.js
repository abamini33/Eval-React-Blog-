import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk(
	"comments/fetchComments",
	async (id) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		);
		const comments = response.data;

		return comments;
	}
);

export const addComment = createAsyncThunk(
	"comments/addComment",
	async (comment) => {
		const response = await axios.post(
			"https://jsonplaceholder.typicode.com/comments",
			comment
		);
		const newComment = response.data;

		return newComment;
	}
);

let id = 501;

const commentsSlice = createSlice({
	name: "comments",
	initialState: {
		comment: {
			postId: null,
			id: id++,
			name: "",
			email: "",
			body: "",
		},
		comments: [],
		status: "idle",
		error: null,
	},
	reducers: {
		setCommentsValue: (state, action) => {
			state.comment[action.payload.name] = action.payload.value;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchComments.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchComments.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.comments = action.payload;
			})
			.addCase(fetchComments.rejected, (state, action) => {
				console.error(
					"Failed to fetch comments: ",
					action.error.message
				);
				state.status = "failed";
				state.error = action.error.message;
			});

		builder
			.addCase(addComment.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addComment.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.comments.push(action.payload);
				state.comment = {
					postId: null,
					id: id++,
					name: "",
					email: "",
					body: "",
				};
			})
			.addCase(addComment.rejected, (state, action) => {
				console.error("Failed to add comment: ", action.error.message);
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { setCommentsValue } = commentsSlice.actions;

export default commentsSlice.reducer;

export const selectAllComments = (state) => state.comments.comments;
export const selectComment = (state) => state.comments.comment;
