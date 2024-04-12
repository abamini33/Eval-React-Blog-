import React from "react";

const CommentItem = ({ comment }) => {
	return (
		<div>
			<p>{comment.text}</p>
			<p>Par : {comment.author}</p>
		</div>
	);
};

export default CommentItem;
