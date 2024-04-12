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
import CommentForm from "../components/CommentForm";

const PostDetailPage = () => {
	const dispatch = useDispatch();

	const { id } = useParams();

	const post = useSelector(selectPost);
	const comments = useSelector(selectAllComments);

	useEffect(() => {
		dispatch(fetchPostById(id));
		dispatch(fetchComments(id));
	}, [dispatch, id]);

	return (
		<div className="card">
			<div>
				<h1>Post:</h1>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
				<p>Auteur : {post.author}</p>
			</div>
			<div>
				<h3>Commentaires</h3>
				{comments.map((comment) => (
					<CommentItem key={comment.id} comment={comment} />
				))}
			</div>

			<CommentForm id={id} />
		</div>
	);
};

export default PostDetailPage;
