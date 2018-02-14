import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

class PostList extends Component {

    render () {
        const postList = this.props.posts.map((post) => {
            return (
                <PostContainer>
                <div>
                    <imgContainer>
                    <img class = "skull" width="200" src={post.post_photo} alt="" />
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                    </imgContainer>
                </div>
                </PostContainer>
            )
        })
        
        return(
            <div>
                {postList}
            </div>
        )
    }
}

export default PostList

const imgContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: DodgerBlue;
`
const PostContainer = styled.div`
  displa

`