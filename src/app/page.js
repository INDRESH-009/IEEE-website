import HomePage from "@/components/HomePage/HomePage";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer/>
    </div>
  );
}
