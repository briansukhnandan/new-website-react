import { Box } from "@chakra-ui/react";
import { Body } from "./body";

export default function Home() {
  return (
    <main>
      <OpeningHtmlTag />
      <Header />
      <Body />
      <ClosingHtmlTag/>
    </main>
  );
}

const Header = () => (
  <Box sx={{ textAlign: "center", paddingTop: "10px" }}>
    <pre>
      __________       .__                <br/>
      \______   \______|__|____    ____   <br/>
      |    |  _/\_  __ \  \__  \  /    \  <br/>
      |    |   \ |  | \/  |/ __ \|   |  \ <br/>
      |________/ |__|  |__(____  /___|  / <br/>
      ________________________ \/     \/  <br/>
    </pre>
  </Box>
);

const OpeningHtmlTag = () => (
  <Box style={{ textAlign: "left" }}>
    {"<Brian>"}
  </Box>
);

const ClosingHtmlTag = () => (
  <Box 
    style={{ 
      textAlign: "right",
      bottom: "0px" 
    }}
  >
    {"</Brian>"}
  </Box>
);

