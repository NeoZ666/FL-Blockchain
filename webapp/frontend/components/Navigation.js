import { useState } from "react";
import { ethers } from "ethers";

const Navigation = () => {
  const [account, setAccount] = useState("");

  const connectHandler = async () => {
    try {
      if (window.ethereum) {
        // Request access to the user's MetaMask account
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Get the first account from the array of accounts
        const selectedAccount = accounts[0];

        // Use ethers to format the account address
        const formattedAccount = ethers.utils.getAddress(selectedAccount);

        // Set the connected account in the state
        setAccount(formattedAccount);
      } else {
        console.error("Metamask extension not detected");
      }
    } catch (error) {
      console.error("Error connecting to Metamask:", error);
    }
  };

  return (
    <nav>
      <div className="nav__brand">
        <h1>NFT GenMint</h1>
        <br />
      </div>

      {account ? (
        <button type="button" className="nav__connect">
          {`${account.slice(0, 6)}...${account.slice(-4)}`}
        </button>
      ) : (
        <button type="button" className="nav__connect" onClick={connectHandler}>
          Connect Metamask
        </button>
      )}
    </nav>
  );
};

export default Navigation;
