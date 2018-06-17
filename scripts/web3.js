import Web3 from 'web3';

let web3;
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/4ZoLLml9XXVHP5lACppc');
web3 = new Web3(provider);

export default web3;