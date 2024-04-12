import React from "react";
import CommentItem from "../components/CommentItem";

const PostDetailPage = ({ post, comments }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Autheur : {post.author}</p>
            <h3>Commentaires</h3>
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default PostDetailPage;
