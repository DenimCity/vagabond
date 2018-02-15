import React from 'react'
import styled from 'styled-components'


const SinglePost = (props) => {

    const handleClick = () => {
        if (window.confirm(`Are you sure you want to delete ${props.title}?`)) {
            props.deletePost(props.post.id)
        }
    }
    
    return(
        <div >
            <img className="ImagePost" width="300" src={props.post_photo} alt="" />
            <div className="post-title">{props.title}</div>
            <div className="post-text">{props.body}</div>
            <button className="delete" type="submit" onClick={handleClick}>Delete</button>
        </div>
    )
    
}

export default SinglePost

