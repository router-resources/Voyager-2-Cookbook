## Router Protocol

<!-- <p align="center" >

<img src="https://user-images.githubusercontent.com/124175970/224509096-12e4864a-6819-4c8c-8998-41c7a96ba026.jpg" />
  </p> -->

<!-- ![router-protocol-crypto-ninjas](https://user-images.githubusercontent.com/124175970/224509096-12e4864a-6819-4c8c-8998-41c7a96ba026.jpg) -->

<img src="https://user-images.githubusercontent.com/124175970/224509096-12e4864a-6819-4c8c-8998-41c7a96ba026.jpg" width="8000000em" height="400em" />


# `Company Information`

Router Protocol is a solution introduced to address the issues hindering the usability of cross-chain liquidity migration in the DeFi ecosystem. It acts as a bridge connecting various layer 1 and layer 2 blockchains, allowing for the flow of contract-level data across them. The Router Protocol can either transfer tokens between chains or initiate operations on one chain and execute them on another.

Please check the [official documentation of Router Protocol](https://www.routerprotocol.com/)



# ⭐️ `Star us`

If this repository helps you build cross-chain dapps faster and easier - please star this project, every star makes us very happy!

# 🤝 `Need help?`

If you need help or have other some questions - don't hesitate to write in our discord channel and we will check asap. [Discord link](https://discord.gg/xvx2pFu9). The best thing about this is the super active community ready to help at any time! We help each other.

# 🤝 `Clone or fork this repository`

```sh
git clone https://github.com/router-resources/ERC20-Cookbook.git
npm install
npm start
```

# 🧭 `Table of contents`
- [🧭 Table of contents](#-table-of-contents)
- [`Need for CrossChain ?`](#Need-for-CrossChain)
- [`What is Voyager v2.0 ?`](#What-is-Voyager-v2.0-?)
- [`Build Don't Talk`](#Build-Don't-Talk)
- [`Explanation#1 Getting the Quote`](#Explanation#1-Getting-the-Quote)
- [`Explanation#2 Checking for Approval`](#Explanation#2-Checking-for-Approval)
- [`Explanation#3 Executing the Transaction`](#Explanation#3-Executing-the-Transaction)
- [`Full Code`](#Full-Code)
- [🚀 Steps](#-quick-start)

## `Need for CrossChain`

**Bitcoin**

Back in 2009, Bitcoin was created by an unknown person called Satoshi Nakamoto, introducing the concept of decentralization. It eliminated the need for a central authority or intermediary to verify transactions, making it possible for people to transact with each other directly.

**Problem with Bitcoin**

Bitcoin was not designed to support smart contracts, which limits its ability to create complex decentralized applications. 
The inability to deploy smart contracts on the Bitcoin blockchain, makes the scope of decentralization , limited to a very small area.

**Ethereum**

Ethereum is a blockchain, which serves as a state machine where people can deploy smart contracts, This enables people to build Dapps (Decentralised Applications on the top of Ethereum" 

**Problem with Ethereum**

Ethereum is not scalable.The cost of gas fees which one need to pay to interact with the smart contracts is quite high. This hinders the businesses of the Dapps buit on the top of Ethereum.

**L2 Solutions of Ethereum**

Many L2 solutions for Ethereum are created, keeping in mind Ethereum isn't scalable. The gas fee which one need to pay in order to intereact with the smart conracts is significantly cheaper than Ethereum.

**Problem with L2 solutions of Ethereum**

L2 solutions solves the problem of scalability , but they have much lesser nodes as compared to Ethereum making them less decentralised and secure than Ethereum.

**Blockchain Trilemma**

So, we can clearly see, solving scalability , degrades security and decentralisation and having more decentralisation and security results in making the chain less scalable .

This is known as Blockchain Trilemma, where it's not possible to ensure scalability, decentralisation and security at the same time . 

**Need for Crosschain**

Going CrossChain helps us leverage all these 3 features (Decentralisation + Scalabity + Security ) used for different operations performed in a single Dapp.
This is exactly , where the Router comes in ! It is an interoperability layer to connect blockchains with a goal to integrate all the blockchains within the ecosystem. 

## `What is Voyager v2.0 ?`

Voyager is a cross-chain swapping engine or protocol designed to enable cross-chain asset transfers. It serves as a mechanism for seamlessly moving digital assets or tokens between different blockchain networks

Latest Version of Voyager i.e Voyager v2.0 employs a trustless method for managing cross-chain asset transfers. In this system, a forwarder entity delivers the requested asset to the user on the destination chain. After confirming the forwarder's successful settlement on the destination chain, they can access the user's deposited funds on the source chain

## `Build Don't Talk`

I know, you got bored of the theory. Not going into much theory from now on, let's start building. Clone the repository in your local.

```
git clone https://github.com/router-resources/Voyager-2-Cookbook
```
Install the necessary packages

```
npm install
```
Run on localhost

```
npm start
```
Your application will start running
<img width="680" alt="image" src="https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/40a93d65-41bd-4544-b683-05a8b6599501">

Now, all you need is just 3 simple steps !

## `Step#1 Getting the Quote`

The Voyager v2.0 JavaScript SDK enables you to interact with the Voyager contract and initiate cross-chain token transfers. The first step in this process is to request a quote, which provides you with essential details about the proposed token transfer.

To request a quote, follow these steps:

1. Define the PATH_FINDER_API_URL: Set the PATH_FINDER_API_URL variable to the URL of the Pathfinder API for the Voyager testnet. This is where you will send your quote request.

   ```javascript
   const PATH_FINDER_API_URL = "https://api.pf.testnet.routerprotocol.com/api"
   ```

2. Create the `getQuote` Function: This function handles the quote request. It uses the `axios` library to make an HTTP GET request to the Voyager Pathfinder API.

   ```javascript
   const getQuote = async (params) => {
       const endpoint = "v2/quote"
       const quoteUrl = `${PATH_FINDER_API_URL}/${endpoint}`
   
       try {
           const res = await axios.get(quoteUrl, { params })
           return res.data;
       } catch (e) {
           console.error(`Fetching quote data from pathfinder: ${e}`)
       }    
   }
   ```

3. Call the `getQuote` Function: Use this function to request a quote by passing appropriate parameters.In this repository , this function is called using a a button.

   ```javascript
   // Example usage:
   const quoteParams = {
				'fromTokenAddress': from,
				'toTokenAddress': to,
				'amount': amount,
				'fromTokenChainId': "80001",
				'toTokenChainId': "43113", // Fuji
		
				'widgetId': 0, // get your unique wdiget id by contacting us on Telegram
			}
   
   const quoteData = await getQuote(quoteParams);
   console.log("Quote Data:", quoteData);
   ```
These parameters define the details of the token transfer you wish to execute. Let's break down what each parameter represents:

- `'fromTokenAddress'`: This should specify the address of the token you want to transfer from (the source token).

- `'toTokenAddress'`: Provide the address of the token you want to transfer to (the destination token).

- `'amount'`: Set the amount of the token you wish to transfer.

- `'fromTokenChainId'`: This parameter represents the chain ID of the source blockchain. In this case, it's set to "80001."

- `'toTokenChainId'`: Similarly, this parameter specifies the chain ID of the destination blockchain, which, in this example, is "43113" (Fuji).

- `'widgetId'`: This parameter is used to identify the widget responsible for the transfer. You'll typically need to obtain a unique widget ID through contact with the Voyager team, often via Telegram or other means. For now, let's keep it as 0.

With these parameters, you can now call the `getQuote` function with this `params` object to initiate a quote request for your specific token transfer. 

   <img width="197" alt="image" src="https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/5867052e-301e-46c6-b206-24094c19298e">


### Response
The `getQuote` function returns the quote data, which typically includes details about the token transfer, such as source and destination chains, token amount, fees, and other relevant information.Click the **Get Quote** button and go to console to see the quote data printed on console.

---


