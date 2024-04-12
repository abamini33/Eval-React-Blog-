import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addPost,
	selectAllPosts,
	selectPost,
	setPostValue,
} from "../features/postsSlice";

const NewPost = () => {
	const dispatch = useDispatch();

	const post = useSelector(selectPost);
	const posts = useSelector(selectAllPosts);

	console.log("postsCLIENT", posts);

	const { title, body } = post;

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(setPostValue({ name, value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addPost(post));
	};

	return (
		<div>
			<h1>Ajouter un poste</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Titre :
					<input
						type="text"
						name="title"
						value={title}
						onChange={handleChange}
					/>
				</label>
				<label>
					Contenu :
					<textarea
						name="body"
						value={body}
						onChange={handleChange}
					></textarea>
				</label>
				<button type="submit">Ajouter</button>
			</form>
		</div>
	);
};

export default NewPost;
