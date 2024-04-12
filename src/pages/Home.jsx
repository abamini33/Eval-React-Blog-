import React from "react";
import PostItem from "../components/PostItem";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectAllPosts } from "../features/postsSlice";

const HomePage = ({ posts }) => {
	const dispatch = useDispatch();

	const posts = useSelector(selectAllPosts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<div>
			<h1>Posts</h1>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</div>
	);
};

export default HomePage;
