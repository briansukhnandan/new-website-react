import Image from "next/image";

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
  <div style={{ textAlign: "center", paddingTop: "10px" }}>
    <pre>
      __________       .__                <br/>
      \______   \______|__|____    ____   <br/>
      |    |  _/\_  __ \  \__  \  /    \  <br/>
      |    |   \ |  | \/  |/ __ \|   |  \ <br/>
      |________/ |__|  |__(____  /___|  / <br/>
      ________________________ \/     \/  <br/>
    </pre>
  </div>
);


const Body = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {"TODO"}
    </div>
  )
}

const OpeningHtmlTag = () => (
  <div style={{ textAlign: "right" }}>
    {"<Brian>"}
  </div>
);

const ClosingHtmlTag = () => (
  <div style={{ textAlign: "left" }}>
    {"</Brian>"}
  </div>
);
