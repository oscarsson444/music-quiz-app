import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player/youtube";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const videoName = encodeURIComponent("Smells like teen spirit");
  const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyB5T0IPe7RxSZ2I1YWXA7THAtwvrl2dgvM&q=${videoName}&type=video&part=snippet&maxResults=1`;

  const searchButton = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const videoId = data.items[0].id.videoId;
    const vidUrl = `https://www.youtube.com/watch?v=${videoId}`;
    setVideoUrl(vidUrl);
  };

  return (
    <div className="App">
      <button onClick={searchButton}>Search!</button>
      <ReactPlayer url={videoUrl} />
    </div>
  );
}

export default App;
