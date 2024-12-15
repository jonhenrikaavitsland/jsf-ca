import { Outlet } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow py-6 px-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
