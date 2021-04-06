export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((artist) => {
    return {
      params: { id: artist.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { artist: data },
  };
};

const Details = ({ artist }) => {
  return (
    <div>
      <h1>{artist.name}</h1>
      <p>{artist.email}</p>
      <p>{artist.website}</p>
      <p>{artist.address.city}</p>
    </div>
  );
};

export default Details;
