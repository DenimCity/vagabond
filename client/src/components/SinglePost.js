import React from "react";
import styled from "styled-components";
const SinglePost = props => {
    const handleClick = () => {
        if (window.confirm(`Are you sure you want to delete ${props.title}?`)) {
            props.deletePost(props.post.id);
        }
    };

    return (
        <div>
            <div>
                <img width="200" src={props.post_photo} alt="" />
            </div>
            <div>

                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
            <button type="submit" onClick={handleClick}>
                Delete
        </button>

        </div>
    );
};

export default SinglePost;
