import React from "react";

function Post(props) {
  return (
    <div className="flex">
      <h6>Username: {props.post.username} </h6>
      <p>Body: {props.post.postBody} </p>
    </div>
  );
}

export default Post;
