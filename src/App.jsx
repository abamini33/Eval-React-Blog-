import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import NewPost from "./pages/NewPost";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectAllPosts } from "./features/postsSlice";
import { useEffect } from "react";

const App = () => {
	const dispatch = useDispatch();
	const posts = useSelector(selectAllPosts);

	console.log("postsCLIENT", posts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<>
			<NavBar />

			<main>
				<Routes>
					<Route path="/" element={<Home posts={posts} />} />
					<Route path="/post/:id" element={<PostDetails />} />
					<Route
						path="/new-post"
						element={<NewPost posts={posts} />}
					/>
				</Routes>
			</main>
		</>
	);
};

export default App;
