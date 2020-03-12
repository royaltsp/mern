import React, { useState, useEffect } from "react";

function UseEffect() {
  const [post, setPost] = useState({ title: "Title", body: "Body" });
  const [searchQuery, setSearchQuery] = useState(1);
  console.log("UseEffect Rendered");

  const fetchPost = async () => {
    let post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${searchQuery}`
    );
    post = await post.json();
    await setPost(post);
  };

  useEffect(() => {
    if(searchQuery.length) fetchPost();
  }, [searchQuery]);
  return (
    <div>
      <div className="container">
        <div className="row text-center mx-auto py-3 font-weight-bold text-uppercase">
          <div className="col-4"></div>
          <div className="col-4">Simple Post Fetching App</div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <hr />
            {post.title}
            <hr />
            {post.body}
            <hr />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default UseEffect;
