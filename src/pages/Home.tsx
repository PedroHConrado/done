import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Home() {
  return (
    <>      
      <Sidebar />
      <Header />
      <Dashboard />
    </>
  );
}
