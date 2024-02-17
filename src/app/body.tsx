"use client"
import { useState } from "react";
import { 
  Box, 
  Button, 
  Center, 
  IconButton, 
  Image, 
  ListItem, 
  Table, 
  TableCaption,
  TableContainer, 
  Tbody, 
  Td, 
  Text, 
  Th, 
  Thead, 
  Tooltip, 
  Tr, 
  UnorderedList, 
} from "@chakra-ui/react"
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
            onClick={() => setShowContactInfo(!showContactInfo)}
            paddingLeft="12px"
          >
            Contact + Links
          </Button>
        </Box>
      </Center>
      { showContactInfo && <ContactInfoAndLinks /> }
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
      {"I'm a Software Engineer currently living my best life in the 💖 of Queens, NY."}
    </Text>
    <Box sx={{paddingTop: "6px"}}>
      <Text fontSize="sm">
        {"When I'm not programming, some of my other hobbies include:"}
      </Text>
      <Text fontSize="xs">{"• railfanning"}</Text>
      <Text fontSize="xs">{"• playing bass guitar"}</Text>
      <Tooltip 
        label={
          <Box>
            Some of my favorites are (this was hard to pick):
            <UnorderedList>
              <ListItem>Texas Chainsaw Massacre</ListItem>
              <ListItem>Scream (all of them)</ListItem>
              <ListItem>Hell House LLC</ListItem>
              <ListItem>Child&apos;s Play</ListItem>
              <ListItem>Halloween</ListItem>
            </UnorderedList>           
          </Box>
        }
      >
        <Text color="orange" fontSize="xs">
          {"• watching horror movies"}
        </Text>
      </Tooltip>
      <Text fontSize="xs">{"• devouring chopped cheeses"}</Text>
      <Tooltip 
        label={
          <Box>
            Some of my favorite games are:
            <UnorderedList>
              <ListItem>Super Mario Sunshine</ListItem>
              <ListItem>TLoZ: Majoras Mask</ListItem>
              <ListItem>TLoZ: Ocarina of Time</ListItem>
              <ListItem>Persona 3: FES</ListItem>
              <ListItem>Final Fantasy X</ListItem>
            </UnorderedList>
          </Box>
        }
      >
        <Text 
          color="tomato" 
          fontSize="xs"
        >
          {"• and most importantly, gaming 🔪"}
        </Text>
      </Tooltip>
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
                TV shows from TheMovieDB&apos;s API.
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
                  to ensure that construction wouldn&apos;t hinder them.
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
                  named &quot;Shuttle Trouble&quot; based around the idea of repairing a space ship. 
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

const ContactInfoAndLinks = () => {
  const iconMap = {
    GITHUB: <Image src="/images/icons/github.svg" width="32" height="32" alt="github" />,
    LINKEDIN: <Image src="/images/icons/linkedin.svg" width="32" height="32" alt="linkedin" />
  };

  return (
    <Center paddingTop={"12px"}>
      <Box borderWidth={"2px"} borderRadius={"5px"} padding="8px">
        <Box display={"flex"} gap={"8px"}>
          <IconButton 
            aria-label="Github Icon" 
            icon={iconMap["GITHUB"]} 
            onClick={() => window.open("https://github.com/briansukhnandan")}
          />
          <IconButton 
            aria-label="LinkedIn Icon" 
            icon={iconMap["LINKEDIN"]} 
            onClick={() => window.open("https://linkedin.com/in/briansukhnandan")}
          />
        </Box>
        <Box paddingTop={"8px"}>
          <Tooltip 
            label={(
              <Box textAlign={"center"}>
                Email: briansukhnandan@gmail.com
                <br/>
                Click to copy!
              </Box>
            )}
          >
            <Button 
              size={"sm"} 
              justifyContent={"center"}
              onClick={() => {
                navigator.clipboard.writeText("briansukhnandan@gmail.com");
              }}
            >
              Email Me!
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </Center>
  )
}
