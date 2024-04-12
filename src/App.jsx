import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import NewPost from "./pages/NewPost";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<>
			<NavBar />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post/:id" element={<PostDetails />} />
					<Route path="/new-post" element={<NewPost />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
