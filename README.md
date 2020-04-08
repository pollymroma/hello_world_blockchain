# hello_world_blockchain
## Hello World example using Solidity and Web3

### How to run

1. On the project directory, run: truffle develop
2. Configure Metamask:
	* Import Wallet using the mnemonic words from running truffle develop
	* Check that the account is the first of the ten accounts listed by truffle develop
	* Create a new network. Name: Ganache, url: http://localhost:9545/, Symbol: ETH 
	* Connect to that network
3. On the same terminal where truffle develop is running now run migrate --reset
4. Check that the contract adress shown is the same one as in the bundle.js contract web3 instance.
5. Run npm install.
6. Run npm start to start the app.
7. Open a browser in http://localhost:9080