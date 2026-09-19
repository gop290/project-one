import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function DataFeching() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      setPost(res.data);
    });
  }, []);
  return (
    <div>
      <div>
        <ul>
          {post.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DataFeching;
