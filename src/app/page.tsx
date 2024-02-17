import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}

const Header = () => {
  return (
    <div>
      <pre>
        __________       .__                <br/>
        \______   \______|__|____    ____   <br/>
        |    |  _/\_  __ \  \__  \  /    \  <br/>
        |    |   \ |  | \/  |/ __ \|   |  \ <br/>
        |________/ |__|  |__(____  /___|  / <br/>
        ________________________ \/     \/  <br/>
      </pre>
    </div>
  )
}
