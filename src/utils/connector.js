import { InjectedConnector } from '@web3-react/injected-connector'
import Web3 from "web3";

export const injected = new InjectedConnector({
  supportedChainIds: [80001],
})

export const web3 = new Web3(Web3.givenProvider || "https://rpc-endpoints.superfluid.dev/mumbai");