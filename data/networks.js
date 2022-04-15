const networks = [
  {
    chainId: "42161",
    chainName: "Arbitrum One",
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    nativeCurrency: {
      symbol: "AETH",
    },
    blockExplorerUrls: ["https://arbiscan.io"],
  },
  {
    chainId: "421611",
    chainName: "Arbitrum Testnet",
    rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
    nativeCurrency: {
      symbol: "AETH",
    },
    blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/#/"],
    faucetUrls:["https://www.rinkeby.io/#faucet"]
  },
  {
    chainId: "43114",
    chainName: "Avalanche Mainnet",
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    nativeCurrency: {
      symbol: "AVAX",
    },
    blockExplorerUrls: ["https://snowtrace.io"],
  },
  {
    chainId: "43113",
    chainName: "Avalanche Testnet",
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    nativeCurrency: {
      symbol: "AVAX",
    },
    blockExplorerUrls: ["https://testnet.explorer.avax.network/"],
    faucetUrls:["https://faucet.avax-test.network/"]
  },
  {
    chainId: "100",
    chainName: "Gnosis Chain",
    rpcUrls: ["https://rpc.gnosischain.com"],
    nativeCurrency: {
      symbol: "xDAI",
    },
    blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
  },
  {
    chainId: "80001",
    chainName: "Polygon Testnet Mumbai",
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    nativeCurrency: {
      symbol: "MATIC",
    },
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    faucetUrls:["https://faucet.polygon.technology/"]
  },
  {
    chainId: "137",
    chainName: "Polygon Mainnet",
    rpcUrls: ["https://polygon-rpc.com/"],
    nativeCurrency: {
      symbol: "MATIC",
    },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  {
    chainId: "1666600000",
    chainName: "Harmony Mainnet Shard 0",
    rpcUrls: ["https://api.harmony.one"],
    nativeCurrency: {
      symbol: "ONE",
    },
    blockExplorerUrls: ["https://explorer.harmony.one/"],
  },
  {
    chainId: "1666700000",
    chainName: "Harmony Testnet Shard 0",
    rpcUrls: ["https://api.s0.b.hmny.io"],
    nativeCurrency: {
      symbol: "ONE",
    },
    blockExplorerUrls: ["https://explorer.pops.one/"],
    faucetUrls:["https://faucet.pops.one/"]
  },
  {
    chainId: "56",
    chainName: "Binance Smart Chain",
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    nativeCurrency: {
      symbol: "BNB",
    },
    blockExplorerUrls: ["https://bscscan.com"],
  },
  {
    chainId: "97",
    chainName: "Binance Smart Chain Testnet",
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    nativeCurrency: {
      symbol: "BNB",
    },
    blockExplorerUrls: ["https://testnet.bscscan.com"],
    faucetUrls:["https://testnet.binance.org/faucet-smart"]
  },
];

export default networks;
