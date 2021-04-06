// NEXTJS
import Link from "next/link";
// COMPONENTS
import Head from "next/head";

// STYLES
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Artists List | Home</title>
        <meta name="keywords" content="Home Page" />
      </Head>
      <div>
        <h1 className={styles.title}>This is the home page</h1>
        <p className={styles.text}>
          Th’art nesh thee nay lad soft lad wacken thi sen up t’foot o’ our
          stairs. Nay lad where’s tha bin. Th’art nesh thee a pint ‘o mild any
          rooad t’foot o’ our stairs. Where there’s muck there’s brass t’foot o’
          our stairs ah’ll gi’ thee a thick ear. Ah’ll learn thi tintintin tell
          thi summat for nowt soft lad mardy bum. Chuffin’ nora ah’ll box thi
          ears soft lad ee by gum tell thi summat for nowt ah’ll gi’ thee a
          thick ear.
        </p>
        <p className={styles.text}>
          Th’art nesh thee nay lad soft lad wacken thi sen up t’foot o’ our
          stairs. Nay lad where’s tha bin. Th’art nesh thee a pint ‘o mild any
          rooad t’foot o’ our stairs. Where there’s muck there’s brass t’foot o’
          our stairs ah’ll gi’ thee a thick ear. Ah’ll learn thi tintintin tell
          thi summat for nowt soft lad mardy bum. Chuffin’ nora ah’ll box thi
          ears soft lad ee by gum tell thi summat for nowt ah’ll gi’ thee a
          thick ear.
        </p>
        <Link href="/artists">
          <a className={styles.btn}>See Artists Listing</a>
        </Link>
      </div>
    </>
  );
}
