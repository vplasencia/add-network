import NetworkList from "../components/networkList";

export default function Home() {
  return (
    <div>
      <div className="text-center mb-20 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
        <span>Add network to MetaMask</span>
      </div>
        <NetworkList />
    </div>
  );
}
