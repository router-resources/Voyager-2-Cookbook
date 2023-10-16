import React,{useState} from 'react'
import axios from "axios"
import { ethers } from 'ethers';
import './App.css'

function App() {
	 const from="0x22bAA8b6cdd31a0C5D1035d6e72043f4Ce6aF054";
	 const to="0xb452b513552aa0B57c4b1C9372eFEa78024e5936";
	 const amount=3000000000000;
	const [quoteData,setQuoteData]=useState('')
	const erc20_abi = [
		{
			"name": "approve",
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"name": "allowance",
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}
			],
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];
	const PATH_FINDER_API_URL = "https://api.pf.testnet.routerprotocol.com/api"
	const getQuote = async (params) => {
		const endpoint = "v2/quote"
		const quoteUrl = `${PATH_FINDER_API_URL}/${endpoint}`
	
		console.log(quoteUrl)
	
		try {
			const res = await axios.get(quoteUrl, { params })
			return res.data;
		} catch (e) {
			console.error(`Fetching quote data from pathfinder: ${e}`)
		}    
	}
	const checkAndSetAllowance = async (wallet, tokenAddress, approvalAddress, amount) => {
		// Transactions with the native token don't need approval
		if (tokenAddress === ethers.constants.AddressZero) {
			return
		}
	
		const erc20 = new ethers.Contract(tokenAddress, erc20_abi, wallet);
		const allowance = await erc20.allowance(await wallet.getAddress(), approvalAddress);
		if (allowance.lt(amount)) {
			const approveTx = await erc20.approve(approvalAddress, amount, {gasPrice: await wallet.provider.getGasPrice()});
			try {
				await approveTx.wait();
				console.log(`Transaction mined succesfully: ${approveTx.hash}`)
			}
			catch (error) {
				console.log(`Transaction failed with error: ${error}`)
			}
		}
		else{
			console.log("enough allowance")
		}
	}
	const getTransaction = async (params, quoteData) => {
		const endpoint = "v2/transaction"
		const txDataUrl = `${PATH_FINDER_API_URL}/${endpoint}`
	
		console.log(txDataUrl)
	
		try {
			const res = await axios.post(txDataUrl, {
				...quoteData,
				fromTokenAddress: params.fromTokenAddress,
				toTokenAddress: params.toTokenAddress,
				slippageTolerance: 0.5,
				senderAddress: "0x458BC78d8844Dab5E9B5d01571638755f349be7a",
				receiverAddress: "0x458BC78d8844Dab5E9B5d01571638755f349be7a",
				widgetId: params.widgetId
			})
			return res.data;
		} catch (e) {
			console.error(`Fetching tx data from pathfinder: ${e}`)
		}    
	}
  return (
	<div>

<center>

		<h1>Voyager Demo 🚀</h1>

		<h5>Transfer UDST from Polygon Mumbai to Avalanche Fuji</h5>
		
		<br></br>
		<h2>Steps</h2>
		<br></br>



		<button  class="button-51" onClick={async ()=>{
			
			const params ={
				'fromTokenAddress': from,
				'toTokenAddress': to,
				'amount': amount,
				'fromTokenChainId': "80001",
				'toTokenChainId': "43113", // Fuji
		
				'widgetId': 0, // get your unique wdiget id by contacting us on Telegram
			}
			
			const quoteData = await getQuote(params);
			
		
			console.log(quoteData)
		}}>Step 1: Get Quote</button>

		<br></br>
		<br></br>
			<button class="button-51" onClick={async () => {

	// setting up a signer
	const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon_mumbai", 80001);
	// use provider.getSigner() method to get a signer if you're using this for a UI
	const wallet = new ethers.Wallet("76313c982e5cfdc0c47e36465e5fa90e0db291667296a7bd163178b955162b13", provider)

	await checkAndSetAllowance(
		wallet,
		from, // fromTokenAddress (USDT on Mumbai)
		"0x7b2ae36e2381ba23e497c803c4b7da401dcabb5a", // quote.allowanceTo in getQuote(params) response from step 1
		ethers.constants.MaxUint256 // amount to approve (infinite approval)
	);
	}
}>Step 2: Check Allowance</button>
<br></br>
<br></br>
<button class="button-51" onClick={async () => {
    
    // setting up a signer
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon_mumbai", 80001);

    const wallet = new ethers.Wallet("76313c982e5cfdc0c47e36465e5fa90e0db291667296a7bd163178b955162b13", provider)
    
	const params ={
		'fromTokenAddress': from,
		'toTokenAddress': to,
		'amount': amount,
		'fromTokenChainId': "80001",
		'toTokenChainId': "43113", // Fuji

		'widgetId': 0, // get your unique wdiget id by contacting us on Telegram
	}
	
	const quoteData = await getQuote(params);
	

	console.log(quoteData)
   
    const txResponse = await getTransaction({
		'fromTokenAddress': from,
		'toTokenAddress': to,
		'fromTokenChainId': "80001",
		'toTokenChainId': "43113", // Fuji

		'widgetId': 0, // get your unique wdiget id by contacting us on Telegram
	}, quoteData); // params have been defined in step 1 and quoteData has also been fetched in step 1

    // sending the transaction using the data given by the pathfinder
    const tx = await wallet.sendTransaction(txResponse.txn.execution)
    try {
        await tx.wait();
        console.log(`Transaction mined successfully: ${tx.hash}`)
    }
    catch (error) {
        console.log(`Transaction failed with error: ${error}`)
    }
}}>Step 3: Execute</button>
</center>
	</div>
  )
}

export default App