import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
	return (
		<div>
			<Link to={`/post/${post.id}`}>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
				<p>Auteur : {post.author}</p>
			</Link>
		</div>
	);
};

export default PostItem;
