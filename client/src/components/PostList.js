import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SinglePost from "./SinglePost";

const PostList = (props) => {

    return (
        <div>
            {
                props.posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <SinglePost
                                post_photo={post.post_photo}
                                title={post.title}
                                body={post.body}
                                post={post}
                                postId = {post.id}
                                deletePost={props.deletePost} 
                                editPost={props.editPost}
                                handleEditPostChange={props.handleEditPostChange}
                                />
                                
                        </div>
                    )
                })
            }
        </div>
    )

}

export default PostList;

