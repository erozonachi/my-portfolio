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
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        position: absolute;
        width: 1340px;
        height: 61px;
        top: 0px;
        margin: 0 auto;
      }
      div > a {
        display: flex;
        align-items: center;
        position: absolute;
        width: 230px;
        height: 61px;
        left: 0px;
        text-decoration: none;
      }
      div > nav {
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 730px;
        height: 30px;
        right: 0px;
      }
    `}</style>
  </div>
);

export default Header;
