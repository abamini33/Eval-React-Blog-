import React from "react";

const CommentItem = ({ comment }) => {
	const { body, name } = comment;

	return (
		<div>
			<p>{body}</p>
			<p>Auteur : {name}</p>
		</div>
	);
};

export default CommentItem;
