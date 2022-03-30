import Head from "next/head";
import Image from "next/image";
import NetworkList from "../components/networkList";
import styles from "../styles/Home.module.css";

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
