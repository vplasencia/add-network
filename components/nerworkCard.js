import style from "../styles/NetworkCard.module.css";

export default function NetworkCard({ network }) {
  const addNetworkMetamask = async () => {
    if (window.ethereum) {
      try {
        // Try to switch to the chain
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${parseInt(network.chainId).toString(16)}` }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${parseInt(network.chainId).toString(16)}`,
                  chainName: network.chainName,
                  rpcUrls: network.rpcUrls,
                  nativeCurrency: {
                    symbol: network.nativeCurrency.symbol,
                    decimals: 18,
                  },
                  blockExplorerUrls: network.blockExplorerUrls,
                },
              ],
            });
          } catch (addError) {
            console.log(addError);
          }
        }
        // handle other "switch" errors
      }
    } else {
      // If window.ethereum is not found then MetaMask is not installed
      alert(
        "MetaMask is not installed. Please install it to use this app: https://metamask.io/download/"
      );
    }
  };

  return (
    <div className="flex flex-col min-h-full p-5 rounded-md border border-gray-600 md:w-[30rem] md:h-80 w-full space-y-2">
      <div className="mb-auto">
        <div className="pb-5 font-medium text-xl text-center">
          {network.chainName}
        </div>
        <div>
          <span className={style.title}>Network Name:</span>
          <span>{network.chainName}</span>
        </div>
        <div>
          <span className={style.title}>New RPC URL:</span>
          <span>{network.rpcUrls[0]}</span>
        </div>
        <div>
          <span className={style.title}>Chain ID:</span>
          <span>{network.chainId}</span>
        </div>
        <div>
          <span className={style.title}>Currency Symbol:</span>
          <span>{network.nativeCurrency.symbol}</span>
        </div>
        <div>
          <span className={style.title}>Block Explorer URL:</span>
          <a
            className={style.explorerUrl}
            target="_blank"
            rel="noreferrer noopener nofollow"
            href={network.blockExplorerUrls[0]}
          >
            {network.blockExplorerUrls[0]}
          </a>
        </div>
        {network.faucetUrls && (
          <div>
            <span className={style.title}>Faucet URLs:</span>
            {network.faucetUrls.map((url, index) => {
              return (
                <a
                  key={index}
                  className={style.explorerUrl}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  href={url}
                >
                  {url}
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button className={style.addNetworkBtn} onClick={addNetworkMetamask}>
          Add {network.chainName}
        </button>
      </div>
    </div>
  );
}
