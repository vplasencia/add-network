import networksData from "../data/networks";
import NetworkCard from "./nerworkCard";
import { sortNetworksByName } from "../utils/utils";

export default function NetworkList() {
  const networks = sortNetworksByName(networksData);
  return (
    <div className="flex flex-wrap justify-center items-center place-items-center gap-10">
      {networks.map((network, index) => {
        return <NetworkCard network={network} key={index} />;
      })}
    </div>
  );
}
