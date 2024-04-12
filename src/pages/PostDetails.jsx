import React, { useEffect } from "react";
import CommentItem from "../components/CommentItem";
import { fetchPostById, selectPost } from "../features/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
	const dispatch = useDispatch();

	const { id } = useParams();

	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(fetchPostById(id));
	}, [dispatch, id]);

	return (
		<div>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			{/* <p>Autheur : {post.author}</p> */}
			<h3>Commentaires</h3>
			{/* {comments.map((comment) => (
				<CommentItem key={comment.id} comment={comment} />
			))} */}
		</div>
	);
};

export default PostDetailPage;
