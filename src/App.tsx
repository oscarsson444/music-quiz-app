import React, { useState } from "react";
import "./App.css";
import ReactPlayer from "react-player/youtube";
import { fetchSongsFromName } from "./api/getVideos";
import { Box, Center } from "@chakra-ui/react";
import { CreateQuiz } from "./components/CreateQuiz";

function App() {
  return (
    <Center>
      <CreateQuiz />
    </Center>
  );
}

export default App;
