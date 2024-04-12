import React from "react";

const PostItem = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Autheur : {post.author}</p>
        </div>
    );
};

export default PostItem;
