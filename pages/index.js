// NEXTJS
import Link from "next/link";
// COMPONENTS
import Head from "next/head";

// STYLES
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link href="/artists">
        <a>See Artists Listing</a>
      </Link>
    </div>
  );
}
