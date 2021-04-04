import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
}
