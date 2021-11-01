# Hashtune Client

## Run with npm run dev or yarn dev


---

Generating type definition of smart contracts
---
Follow these steps to generate new type definitions when smart contract logic changes

- copy/paste smart contract abi to the `./utils/ABI/` directory
- use `npm run generate-contract-types` to generate type definitions from smart contract abi


Setting up Testnet using [MetaMask](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain)
---

Setting up Binances Testnet to be able to use authenticate with the wallet for development purposes

- Network Name: Smart Chain - Testnet
- New RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/
- ChainID: 97
- Symbol: BNB
- Block Explorer URL: https://testnet.bscscan.com
