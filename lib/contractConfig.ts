import { ethers } from "ethers";

// Mantle Sepolia Configuration
export const MANTLE_SEPOLIA_CONFIG = {
  chainId: '0x138B', // 5003 in hex
  chainName: 'Mantle Sepolia Testnet',
  nativeCurrency: {
    name: 'MNT',
    symbol: 'MNT',
    decimals: 18
  },
  rpcUrls: ['https://rpc.sepolia.mantle.xyz'],
  blockExplorerUrls: ['https://sepolia.mantlescan.xyz'],
  contractAddress: "0x3033C34AA1b345EAc587E930c777A05683636B1f", // Your deployed contract address
  abi: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
    }
  ]
};

// Add Mantle Sepolia Testnet to MetaMask if not present
export async function addMantleSepoliaTestnet() {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [MANTLE_SEPOLIA_CONFIG]
    });
    
    return true;
  } catch (error) {
    console.error('Failed to add Mantle Sepolia testnet:', error);
    throw error;
  }
}

// Switch to Mantle Sepolia Testnet
export async function switchToMantleSepoliaTestnet() {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: MANTLE_SEPOLIA_CONFIG.chainId }]
    });
    
    return true;
  } catch (error: any) {
    // This error code indicates that the chain has not been added to MetaMask
    if (error.code === 4902) {
      return await addMantleSepoliaTestnet();
    }
    console.error('Failed to switch to Mantle Sepolia testnet:', error);
    throw error;
  }
}

// Get contract instance with proper typing for ethers v6
export function getContract(signer: ethers.Signer) {
  return new ethers.Contract(MANTLE_SEPOLIA_CONFIG.contractAddress, MANTLE_SEPOLIA_CONFIG.abi, signer);
}

// Get provider and signer for Mantle Sepolia testnet
export async function getMantleSepoliaProvider() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  // Ensure we're on the correct network
  await switchToMantleSepoliaTestnet();
  
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  
  return { provider, signer };
}

// Check if we're on Mantle Sepolia testnet
export async function isOnMantleSepoliaTestnet() {
  try {
    if (!window.ethereum) return false;
    
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return chainId === MANTLE_SEPOLIA_CONFIG.chainId;
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