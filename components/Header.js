import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>
        <img />
        <span>James, Eneh</span>
      </a>
    </Link>
    <nav>
      <Link href="/#bio">
        <a style={linkStyle}>Bio</a>
      </Link>
      <Link href="/#education">
        <a style={linkStyle}>Education</a>
      </Link>
      <Link href="/#arsenal">
        <a style={linkStyle}>Arsenal</a>
      </Link>
      <Link href="/#experience">
        <a style={linkStyle}>Experience</a>
      </Link>
      <Link href="/#projects">
        <a style={linkStyle}>Projects</a>
      </Link>
    </nav>
  </div>
);

export default Header;
