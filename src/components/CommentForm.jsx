import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addComment({ name, email, content });
		setName("");
		setEmail("");
		setContent("");
	};

	return (
		<div className="card">
			<h2>Ajouter un commentaire</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Nom :
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Email :
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Contenu :
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
					></textarea>
				</label>
				<button type="submit">Ajouter</button>
			</form>
		</div>
	);
};

export default CommentForm;
