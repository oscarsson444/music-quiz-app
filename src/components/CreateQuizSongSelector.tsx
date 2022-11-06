import { HStack, VStack, Text, Image, Box, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { SongFetchType } from "../types/fetchTypes";

export const CreateQuizSongSelector = ({
  title,
  url,
  image,
}: SongFetchType) => {
  const [play, setPlay] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const changePlay = () => {
    setPlay(!play);
  };
  const ref = useRef<ReactPlayer>(null);

  const handleProgress = () => "0%";
  return (
    <HStack borderBottom={"1px"}>
      <Text width={"50%"}>{title}</Text>
      <ReactPlayer
        //style={{ display: "none" }}
        ref={ref}
        width="300px"
        height="200px"
        url={url}
        controls
        playing={play}
        onSeek={() => setPlay(true)}
        progress={handleProgress}
        //onProgress={handleProgress}
      />
      <Button
        onClick={() => {
          ref.current?.seekTo(10);
          setPlay(true);
        }}
      >
        Seek to 00:10
      </Button>
      <Button onClick={changePlay}>Play</Button>
      <Button onClick={handleProgress}>Progress</Button>
    </HStack>
  );
};
