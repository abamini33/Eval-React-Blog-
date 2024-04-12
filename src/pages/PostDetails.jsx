import React, { useEffect } from "react";
import CommentItem from "../components/CommentItem";
import { fetchPostById, selectPost } from "../features/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	addComment,
	fetchComments,
	selectAllComments,
	selectComment,
} from "../features/commentsSlice";

const PostDetailPage = () => {
	const dispatch = useDispatch();

	const { id } = useParams();

	const post = useSelector(selectPost);
	const comments = useSelector(selectAllComments);

	const comment = useSelector(selectComment);

	const handleAddComment = () => {
		const newComment = {
			...comment,
			postId: parseFloat(id),
		};
		dispatch(addComment(newComment));
	};

	useEffect(() => {
		dispatch(fetchPostById(id));
		dispatch(fetchComments(id));
	}, [dispatch, id]);

	return (
		<div>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<p>Auteur : {post.author}</p>
			<h3>Commentaires</h3>
			{comments.map((comment) => (
				<CommentItem key={comment.id} comment={comment} />
			))}

			<button onClick={handleAddComment}>Add comment</button>
		</div>
	);
};

export default PostDetailPage;
