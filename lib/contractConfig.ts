import { ethers } from "ethers";

// U2U Testnet Configuration
export const U2U_TESTNET_CONFIG = {
  chainId: '0x9b4', // 2484 in hex
  chainName: 'Unicorn Ultra Nebulas Testnet',
  nativeCurrency: {
    name: 'U2U',
    symbol: 'U2U',
    decimals: 18
  },
  rpcUrls: ['https://rpc-nebulas-testnet.uniultra.xyz'],
  blockExplorerUrls: ['https://testnet.u2uscan.xyz'],
  contractAddress: "0x0148726D02401cA87c9cb714f16BBB1ebEaEe633", // Your deployed contract address
  abi: [
    // Contract ABI
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "firId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "complainant",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "cid",
          "type": "string"
        }
      ],
      "name": "FIRRegistered",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "cid",
          "type": "string"
        }
      ],
      "name": "registerFIR",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "firId",
          "type": "uint256"
        }
      ],
      "name": "getFIR",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "cid",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "status",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "complainant",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "assignedOfficer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct FIRSystem.FIR",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
};

// Add U2U Testnet to MetaMask if not present
export async function addU2UTestnet() {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [U2U_TESTNET_CONFIG]
    });
    
    return true;
  } catch (error) {
    console.error('Failed to add U2U testnet:', error);
    throw error;
  }
}

// Switch to U2U Testnet
export async function switchToU2UTestnet() {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: U2U_TESTNET_CONFIG.chainId }]
    });
    
    return true;
  } catch (error: any) {
    // This error code indicates that the chain has not been added to MetaMask
    if (error.code === 4902) {
      return await addU2UTestnet();
    }
    console.error('Failed to switch to U2U testnet:', error);
    throw error;
  }
}

// Get contract instance with proper typing for ethers v6
export function getContract(signer: ethers.Signer) {
  return new ethers.Contract(U2U_TESTNET_CONFIG.contractAddress, U2U_TESTNET_CONFIG.abi, signer);
}

// Get provider and signer for U2U testnet
export async function getU2UProvider() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  // Ensure we're on the correct network
  await switchToU2UTestnet();
  
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  return { provider, signer };
}

// Check if we're on U2U testnet
export async function isOnU2UTestnet() {
  try {
    if (!window.ethereum) return false;
    
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return chainId === U2U_TESTNET_CONFIG.chainId;
  } catch (error) {
    console.error('Error checking network:', error);
    return false;
  }
}

// Declare global window type for TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}