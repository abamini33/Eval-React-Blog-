import React, { useState } from "react";

const AddPostPage = ({ addPost }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <div>
            <h2>Ajouter un poste</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Titre :
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Contenu :
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </label>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddPostPage;
