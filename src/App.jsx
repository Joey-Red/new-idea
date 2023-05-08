import React, { useState, useEffect } from "react";
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
      <div className="min-h-screen">
        <Nav />
        {/* <button onClick={() => getRoute()}>GETROUTE</button> */}
        <div className="justify-center flex flex-col mt-4 gap-4 text-white">
          <h1 className="text-2xl text-center w-2/3 mx-auto flex flex-col">
            <span className="text-3xl">Lorem Ipsum</span> "Neque porro quisquam
            est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit..."
          </h1>
          <button className="bg-red-600 rounded py-2 px-6 flex mx-auto font-bold">
            WOW BUTTON
          </button>
        </div>
        <div className="flex w-full justify-center mt-10 gap-4">
          <div className="w-1/4 bg-white/10 text-white rounded p-2">
            <p>
              Integer facilisis interdum laoreet. Integer ullamcorper magna
              fermentum, euismod odio ac, mattis arcu. Vivamus laoreet interdum
              nisl, nec pellentesque tellus pulvinar in.
            </p>
          </div>
          <div className="w-1/4 bg-white/10 text-white rounded p-2">
            <p>
              Integer facilisis interdum laoreet. Integer ullamcorper magna
              fermentum, euismod odio ac, mattis arcu. Vivamus laoreet interdum
              nisl, nec pellentesque tellus pulvinar in.
            </p>
          </div>
          <div className="w-1/4 bg-white/10 text-white rounded p-2">
            <p>
              Integer facilisis interdum laoreet. Integer ullamcorper magna
              fermentum, euismod odio ac, mattis arcu. Vivamus laoreet interdum
              nisl, nec pellentesque tellus pulvinar in.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
