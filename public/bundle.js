var contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "hello2",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
];

  var contractAddress = '0x47342302660b1F8C710bB06455599A7AA7225b37';
  var web3 = new Web3('http://localhost:9545'); //instancio el web3
  var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

  document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello2().call()
    .then(result => {
        document.getElementById('hello').innerHTML = result;
    });
  });