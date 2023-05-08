import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import Post from "./components/Post";
function App() {
  const [posts, setPosts] = useState([]);
  function getRoute() {
    axios
      .get("http://localhost:3000/retrieve-posts")
      .then((response) => {
        // Handle successful response here
        setPosts(response.data);
        // console.log("success", response.data);
      })
      .catch((error) => {
        // Handle error here
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }

  return (
    <>
      <div className="bg-red-200 min-h-screen">
        <Nav />
        <button onClick={() => getRoute()}>GETROUTE</button>
        <div className="h-screen flex justify-center items-center">
          <div className="h-[500px] w-[500px] bg-white flex flex-col justify-center items-center">
            {posts.map((post) => {
              return <Post post={post} key={post._id} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
