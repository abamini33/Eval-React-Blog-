import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addComment,
	selectComment,
	setCommentsValue,
} from "../features/commentsSlice";

const CommentForm = ({ id }) => {
	const dispatch = useDispatch();

	const comment = useSelector(selectComment);
	const { name, email, body } = comment;

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(setCommentsValue({ name, value }));
	};

	const handleAddComment = (e) => {
		e.preventDefault();
		const newComment = {
			...comment,
			postId: parseFloat(id),
		};
		dispatch(addComment(newComment));
	};

	return (
		<div className="card">
			<h2>Ajouter un commentaire</h2>
			<form onSubmit={handleAddComment}>
				<label>
					Nom :
					<input
						type="text"
						name="name"
						value={name}
						onChange={handleChange}
					/>
				</label>
				<label>
					Email :
					<input
						type="email"
						name="email"
						value={email}
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

export default CommentForm;
