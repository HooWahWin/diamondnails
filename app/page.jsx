import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="bg-stone-100">
      <Navbar />
      <Main />
      <Location />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
