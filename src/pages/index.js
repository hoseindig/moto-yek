import Image from "next/image";
import { Inter } from "next/font/google";
import SideBar from "../../components/sideBar";
import Footer from "../../components/footer";
import Header from "../../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <h1>main page</h1> */}
      <Header />
      <SideBar />
      <Footer />
    </main>
  );
}
