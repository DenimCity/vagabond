import React from "react";
import styled from "styled-components";

function NewPostForm(props) {
  return (
    <div>
      <div>
        <form onSubmit={props.createNewPost}>
                    <div>
                        <label htmlFor="title">Title:</label>
                    </div>
                    <div>
                        <input onChange={props.handlePostChange} name="title" value={props.post.title} />
                    </div>
                    <div>
                        <label htmlFor="body">Description: </label>
                    </div>
                    <div>
                        <input onChange={props.handlePostChange} name="body" maxLength="30" value={props.post.body} />
                    </div>
                    <div>
                        <label htmlFor="post_photo">Photo URL:</label>
                        <div>
                        <input onChange={props.handlePostChange} name="post_photo" type="text" value={props.post_photo} />
                        </div>
                    </div>

                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPostForm;
