import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

export default function PostPage(props) {
  const [activePost, setActivePost] = useState({});
  const [activePostId, setActivePostId] = useState(0);

  // load in the current active post
  // once useEffect() detect a change in activePostId, function will take place.
  useEffect(() => { //   useEffect(function, [activePostId]) takes in 2 arguments

    // just define the fetchPost function first
    const fetchPost = async (postId) => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      setActivePost(response.data); // activePost will take on the data
    };

    // now we can call the fetchPost function
    fetchPost(activePostId); // upon the onChange event within the text box, initial will be id of 0
  }
  ,[activePostId]);

  return (
    <React.Fragment>
      <h1>Posts</h1>

      <h2> Active Post </h2>
      <input
        type="text"
        value={activePostId}
        name="activePostId"
        onChange={(evt) => {
          setActivePostId(evt.target.value);
        }}
      />
      <div class="card">
        <div class="card-title">{activePost.title}</div>
        <p>{activePost.body}</p>
      </div>
      <hr />
    </React.Fragment>
  );
}
