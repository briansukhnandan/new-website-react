import { Box } from "@chakra-ui/react";
import { Body } from "./body";

export default function Home() {
  return (
    <main>
      <PageLayout>
        <OpeningHtmlTag />
        <Header />
        <Body />
        <ClosingHtmlTag/>
      </PageLayout>
    </main>
  );
}

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  /** 
   * currently this is so that the ClosingHtmlTag stays at 
   * the bottom of the page.
   */
  return (
    <Box h='calc(100vh)'>
      { children }
    </Box>
  )
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
  <Box style={{ textAlign: "right" }}>
    {"<Brian>"}
  </Box>
);

const ClosingHtmlTag = () => (
  <Box 
    style={{ 
      textAlign: "left", 
      bottom: "0px" 
    }}
  >
    {"</Brian>"}
  </Box>
);

