![](.github/assets/images/cover.png)

<div align="center">

# Hashtune-Marketplace-Client

</div>

## Architecture 🏛
The architecture consists of 3 repositories:

1. [Client Application](https://github.com/hashtune/Hashtune-Marketplace-Client)
2. [Server](https://github.com/hashtune/Hashtune-Marketplace-Server)
3. [Smart Contract (currently deployed to Binance Test Network)](https://github.com/hashtune/Hashtune-Marketplace-Chain)

![](.github/assets/images/architecture.png)

<div align="center">Each repository has it's own steps for set up, development and testing.</div>

---

## Setup 🏗
* Run `yarn` or `npm install` to install dependencies


## Development 🚀
1. Run `yarn dev` to start the Client
2. Run the Setup for the Server and start it on  <u>localhost:5000</u> 
3. Visit <u>localhost:3000</u> to view the running Application


## Testing 🧪
The client uses the Jest and Cypress testing Frameworks.
* To [run Cypress End-to-End tests](https://github.com/hashtune/Hashtune-Marketplace-Client/tree/feat/client-tests/tests/cypress) run all the necessary setup steps for the Client and Server and then run `yarn cy:open`.


## Repository structure 🗂
* The application’s architecture is monolithic
* The individual pages resides in the /pages folder
* Various reusable React components reside in the /components folder
* The GraphQL Code Generator can be found in the /graphql directory
* The styles folder contains the 7-1 SCSS architecture


## Client Application Architecture/Components 🧱
* Next.Js + React.Js: Our frontend Client uses React and the React framework Next.Js for routing, state management etc.
* Apollo Client: Used to fetch data from Server API.
* GraphQL CodeGen: Used to automatically generate typed from GraphQL queries
* SCSS Modules: For component level styles
* 7-1 SCSS Architecture: For global styles and utility classes.
