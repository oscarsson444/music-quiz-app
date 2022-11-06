import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { fetchSongsFromName } from "../api/getVideos";
import { SongFetchType } from "../types/fetchTypes";
import { CreateQuizSongSelector } from "./CreateQuizSongSelector";

export const CreateQuiz = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [songs, setSongs] = useState<SongFetchType[] | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value);

  const searchButton = async () => {
    setSongs(await fetchSongsFromName(searchText));
  };

  return (
    <VStack w="50%" mt="50px">
      <HStack>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AddIcon color="gray.300" />}
          />
          <Input
            type="search"
            placeholder="Song name and artist..."
            value={searchText}
            onChange={handleChange}
          />
        </InputGroup>
        <Button onClick={searchButton}>Search!</Button>
      </HStack>
      {songs &&
        songs.map((item) => (
          <CreateQuizSongSelector
            key={item.url}
            title={item.title}
            url={item.url}
            image={item.image}
          />
        ))}
    </VStack>
  );
};
