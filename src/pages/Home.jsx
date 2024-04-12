import React from "react";
import PostItem from "../components/PostItem";

const HomePage = ({ posts }) => {
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
