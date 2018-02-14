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
        <div>{props.title}</div>
        <div>{props.body}</div>
      </div>
      <button type="submit" onClick={handleClick}>
        Delete
      </button>
      
    </div>
  );
};

export default SinglePost;
