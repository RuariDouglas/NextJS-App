import Link from "next/link";
import Image from "next/Image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image width={217} height={71} src="/dreamville_logo.png" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/artists">
        <a>Artist Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
