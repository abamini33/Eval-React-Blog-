import PostItem from "../components/PostItem";
/* import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectAllPosts } from "../features/postsSlice"; */

const HomePage = ({ posts }) => {
	/* const dispatch = useDispatch();
	const posts = useSelector(selectAllPosts);

	console.log("postsCLIENT", posts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]); */

	return (
		<div>
			<h1>Posts</h1>
			{posts.map((post) => (
				<div key={post.id} className="card">
					<PostItem post={post} />
				</div>
			))}
		</div>
	);
};

export default HomePage;
