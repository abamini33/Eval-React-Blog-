import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectAllPosts } from "../features/postsSlice";

const Home = () => {
	const dispatch = useDispatch();

	const posts = useSelector(selectAllPosts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<div>
			<h1>Home</h1>
		</div>
	);
};

export default Home;
