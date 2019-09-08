import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
      <a>
        <img />
        <span>James, Eneh</span>
      </a>
    </Link>
    <nav>
      <Link href="/#bio">
        <a>Bio</a>
      </Link>
      <Link href="/#education">
        <a>Education</a>
      </Link>
      <Link href="/#arsenal">
        <a>Arsenal</a>
      </Link>
      <Link href="/#experience">
        <a>Experience</a>
      </Link>
      <Link href="/#projects">
        <a>Projects</a>
      </Link>
    </nav>
  </div>
);

export default Header;
