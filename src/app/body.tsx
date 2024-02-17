"use client"
import { useState } from "react";
import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react"
import { ImageCarousel } from "./carousel"

export const Body = () => {
  const [bodyIdx, setBodyIdx] = useState(0);
  return (<Box>
    <Center>
      <Box paddingTop="10px">
        <Button 
          size="xs"
          variant="link"
          colorScheme="red"
          onClick={() => setBodyIdx(0)}
        >
          About Me
        </Button>
        <Button 
          size="xs"
          variant="link"
          colorScheme="orange"
          onClick={() => setBodyIdx(1)}
          paddingLeft="12px"
        >
          Projects
        </Button>
        <Button 
          size="xs"
          variant="link"
          colorScheme="yellow"
          onClick={() => setBodyIdx(2)}
          paddingLeft="12px"
        >
          Resumé
        </Button>
        <Button 
          size="xs"
          variant="link"
          colorScheme="green"
          onClick={() => setBodyIdx(2)}
          paddingLeft="12px"
        >
          Contact
        </Button>
      </Box>
    </Center>
    { getBodyContent(bodyIdx) }
  </Box>)
}

const getBodyContent = (bodyIdx: number) => ({
  0: <AboutMeBody />
})[bodyIdx];

const AboutMeBody = () => {
  return (<Box textAlign={"center"} width="75%" margin="auto">
    <Box 
      sx={{ 
        paddingTop: "20px", 
        width: "400px", 
        margin: "auto"
      }}>
      <ImageCarousel />
    </Box>
    <Text fontSize="xl" as="u">About Me!</Text>
    <Text fontSize="sm">
      {"I'm a Software Engineer currently living in the 💖 of Queens, NY."}
    </Text>
    <Box sx={{paddingTop: "6px"}}>
      <Text fontSize="sm">
        {"When I'm not programming, some of my hobbies include:"}
      </Text>
      <Text fontSize="xs">{"• bass guitar"}</Text>
      <Text fontSize="xs">{"• railfanning"}</Text>
      <Text fontSize="xs">{"• watching horror movies"}</Text>
      <Text fontSize="xs">{"• and most importantly, gaming"}</Text>
    </Box>
  </Box>)
}
