import contractABI from "./abi.json";
import Web3 from 'web3';
// const contractABI = require("./abi.json");
// const Web3 = require('web3');

const contractAddress = '0x68a14B3a0Ec10D56bc8040B379373f810C476871'; 

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function sendLinkToWallet(walletAddress) {
    try {
        console.log('Attempting to send link to wallet:', walletAddress);

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log('Account selected:', account);

        const txn = await contract.methods.sendToUser(walletAddress).send({ from: account });
        console.log('Transaction sent:', txn);

        contract.events.LinkSent({ filter: { to: walletAddress } })
            .on('data', (event) => {
                console.log("Custom link sent: ", event.returnValues._text);
            })
            .on('error', (error) => {
                console.error("Event error:", error);
            });
    } catch (error) {
        console.error('Error:', error);
    }
}

const recipientAddress = "0x68a14B3a0Ec10D56bc8040B379373f810C476871"; 
sendLinkToWallet(recipientAddress);