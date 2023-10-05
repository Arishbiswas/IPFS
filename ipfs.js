var ethers = require('ethers');
var url = 'https://morning-withered-sun.ropsten.discover.quiknode.pro/e45811e314c541fc884553139807270b9b46c702/';
var provider = new ethers.providers.JsonRpcProvider(url);
var address  = '0x1E071c3E438531D69f552cD27DeA90826692f88e';
var abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var contract = new ethers.Contract(address,abi,provider);

contract.getHash().then((result) =>{
  document.getElementById("btn").onclick = function () {
		location.href = "https://ipfs.io/ipfs/"+result;
  	};
});