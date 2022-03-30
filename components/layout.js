import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-2 bg-gray-900 text-slate-300">
      <Header />
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  );
}
