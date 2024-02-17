"use client"
import { useState } from "react";
import { Box, Button, Center, Flex, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { ImageCarousel } from "./carousel"

export const Body = () => {
  const [bodyIdx, setBodyIdx] = useState(0);
  const [showContactInfo, setShowContactInfo] = useState(false);
  return (
    <Box>
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
            onClick={() => window.open("https://docs.google.com/document/d/1p9_AOGbrJWWhp3-EmGflooyrsfgvVG8EaOxXa0mbgG0/edit?usp=sharing")}
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
            Contact + Links
          </Button>
        </Box>
      </Center>
      { getBodyContent(bodyIdx) }
    </Box>
  )
}

const getBodyContent = (bodyIdx: number) => ({
  0: <AboutMeBody />,
  1: <ProjectsAndHackathonsBody />
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

const ProjectsAndHackathonsBody = () => {
  return (
    <Box paddingTop={"20px"}>
      <TableContainer width="80%" sx={{ margin: "auto" }}>
        <Table variant="simple" size="sm">
          <TableCaption>Projects</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Summary</Th>
              <Th>Technologies</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Chip-8 Emulator</Td>
              <Td>
                A Chip-8 emulator written in Python.Features ~95% opcode accuracy
                and contains both unit tests as well as a testing ROM you can use to 
                verify functionality.
              </Td>
              <Td>Python</Td>
            </Tr>
            <Tr>
              <Td>MCC Linux Mod Manager</Td>
              <Td>
                A Mod Manager for Halo: The Master Chief Collection written in
                pure Bash. Features support for Halo Reach, CE, 2, and 3.
              </Td>
              <Td>Bash</Td>
            </Tr>
            <Tr>
              <Td>seatv</Td>
              <Td>
                A Letterboxd clone but for TV shows. Pulls information regarding 
                TV shows from TheMovieDB's API.
              </Td>
              <Td>React, Express, TypeScript</Td>
            </Tr>
            <Tr>
              <Td>FastGE</Td>
              <Td>
                A React App meant to display prices from the Grand Exchange in 
                OldSchool RuneScape. Pulls prices once a day based on a cron schedule 
                and stores results in Google Firebase for retrieval later.
              </Td>
              <Td>React, Google Firebase, Bash</Td>
            </Tr>
            <Tr>
              <Td>delta2A03 (w.i.p)</Td>
              <Td>
                A clone of the 6502 CPU with slightly less functionality 
                written in Rust.
              </Td>
              <Td>Rust</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Box paddingTop={"50px"}>
        <TableContainer width="80%" sx={{ margin: "auto" }}>
          <Table variant="simple" size="sm">
            <TableCaption>Hackathons</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Summary</Th>
                <Th>Technologies</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>MakerHack@NYU 2019: Dumbo Renovation</Td>
                <Td>
                  This MakerHack was focused upon renovating the beloved 
                  neighborhood Dumbo in Brooklyn without hindering any small 
                  businesses. We created a map of Dumbo which used LED strips 
                  (controlled by the Arduino) to represent open businesses 
                  to ensure that construction wouldn't hinder them.
                </Td>
                <Td>Arduino, C++</Td>
              </Tr>
              <Tr>
                <Td>Tech-Festival@QC 2019: Health & Technology</Td>
                <Td>
                  This Tech Festival was focused upon improving Healthcare
                  Technology by creating tools that one may use in the industry.
                  Worked in a team of 2 to design a GUI to display symptoms that
                  may occur at a randomly selected body part. Makes use of Tkinter
                  and the Priaid API.
                </Td>
                <Td>Python</Td>
              </Tr>
              <Tr>
                <Td>CUNY-Hackathon@Baruch 2019: Environmental & Social Impact</Td>
                <Td>
                  This CUNY Hackathon we decided to build a standard HTML page named
                  Plan-It Eco which allows users to create events surrounding
                  environmental cleanup or de-trashing. The events are then posted
                  on the homepage of the website, similar to a messaging board like Reddit.
                </Td>
                <Td>HTML/CSS/JavaScript</Td>
              </Tr>
              <Tr>
                <Td>Global-Game-Jam@Microsoft 2020: Repair & Sustainability</Td>
                <Td>
                  This Global Game Jam was focused around the theme of Repair 
                  and sustainability. Worked in a team of 3 to design a 2D Top-Down RPG 
                  named "Shuttle Trouble" based around the idea of repairing a space ship. 
                  Features a handful of scripts written in C# to enhance gameplay such 
                  as a combat system, bosses/enemies, etc.
                </Td>
                <Td>Unity2D, C#</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
