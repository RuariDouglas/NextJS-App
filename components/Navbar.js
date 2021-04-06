import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/dreamville_logo.png"
          alt="site logo"
          width={217}
          height={71}
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/artists/">
        <a>Artist Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
