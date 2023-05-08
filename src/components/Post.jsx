import React from "react";

function Post(props) {
  console.log(props.post);
  return (
    <div>
      {props.post.username}
      {props.post.postBody}
    </div>
  );
}

export default Post;
