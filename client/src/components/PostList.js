import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SinglePost from "./SinglePost";

const PostList = props => {
  return (
    <PosterCardWrapper>
      {props.posts.map(post => {
        return (
          <NewJackCity key={post.id}>
            <SinglePost
              post_photo={post.post_photo}
              title={post.title}
              body={post.body}
              post={post}
              deletePost={props.deletePost}
            />
          </NewJackCity>
        );
      })}
      <SinglePost />
    </PosterCardWrapper>
  );
};

export default PostList;

const NewJackCity = styled.div`
margin:2rem;
`;

const PosterCardWrapper = styled.div`
display:flex;
justify-content:center;
width: 35px;
margin: 1px;
`