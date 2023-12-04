import { useState } from "react";

// Components
// import Spinner from "react-bootstrap/Spinner";
import Navigation from "./components/Navigation";

// ABIs
// import NFT from "./abis/NFT.json";

// Config
// import config from "./config.json";

function App() {
  const [account, setAccount] = useState(null);

  return (
    <div>
      <div className="text-3xl font-bold underline">
        <h1>NFT GenMint</h1>
        <br />
      </div>

      <Navigation account={account} setAccount={setAccount} />
    </div>
  );
}

export default App;
