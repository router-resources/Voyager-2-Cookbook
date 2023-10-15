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
- [`Prerequisite`](#Prerequisite)
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




