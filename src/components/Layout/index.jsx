import { Outlet } from "react-router-dom";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";

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
