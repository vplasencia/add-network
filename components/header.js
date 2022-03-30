import Link from "next/link";
import ViewSourceCode from "./viewSourceCode";

export default function Header() {
  return (
    <header className="flex justify-between p-5 mb-10">
      <Link href="/">
        <a className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
          Add Network
        </a>
      </Link>
      <ViewSourceCode />
    </header>
  );
}
