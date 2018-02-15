import React from 'react'

const SinglePost = (props) => {

    const handleClick = () => {
        if (window.confirm(`Are you sure you want to delete ${props.title}?`)) {
            props.deletePost(props.post.id)
        }
    }
    
    return(
        <div >
            <img width="200" src={props.post_photo} alt="" />
            <div>{props.title}</div>
            <div>{props.body}</div>
            <button type="submit" onClick={handleClick}>Delete</button>
        </div>
    )
    
}

export default SinglePost
