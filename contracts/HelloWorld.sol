pragma solidity ^0.5.16;

contract HelloWorld {

    function hello() public pure returns(string memory) {
        return 'Hello World';
    }
    //estas funciones se llaman desde el html
    function hello2() public pure returns(string memory) {
        return 'Hello Polly';
    }
}