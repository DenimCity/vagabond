import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import SinglePost from './SinglePost'

const PostList = (props) => {
        
        return(
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
                            deletePost={props.deletePost}/>
                        </div>
                    )
                })
                }
                <SinglePost />
            </div>
        )
    
}

export default PostList

const imgContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: DodgerBlue;
`
