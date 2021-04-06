import styles from "../../styles/Artists.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { artists: data },
  };
};

const Artists = ({ artists }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {artists.map((artist) => (
        <Link href={"/artists/" + artist.id} key={artist.id}>
          <a className={styles.single}>
            <h3>{artist.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
