"use client"
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Body } from "./body";
import { SnowEffect, ToggleSnowButton } from "./snow";

export default function Home() {
  const [showSnow, setShowSnow] = useState(true);
  return (
    <main>
      {/** Keep SnowEffect as the top-most component */}
      { showSnow ? <SnowEffect /> : null }
      <OpeningHtmlTag />
      <ToggleSnowButton
        toggleFn={() => setShowSnow(!showSnow)}
      />
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

