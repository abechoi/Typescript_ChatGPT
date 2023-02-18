import Link from 'next/link';


const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href="/">
          <h1>ABE CHOI</h1>
        </Link>
      </div>
      <div className='left-links'>
        <ul>
          <li>
            <Link href="/showcase">
              Showcase
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='right-links'>
        <ul>
          <li>
            <Link href="/">
              Github
            </Link>
          </li>
          <li>
            <Link href="/">
              Etsy
            </Link>
          </li>
          <li>
            <Link href="/about">
              Instagram
            </Link>
          </li>
        </ul>
      </div>
      

      <style jsx>{`
nav {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  overflow: hidden;
  color: #333333;
  position: fixed;
  width: 100%;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.4);
  font-family: 'Vidaloka';
}


.logo {
  grid-area: logo;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-bottom: 10px;
}

.left-links {
  grid-area: left-links;
  margin-right: 0px;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 2;
}

.right-links {
  grid-area: right-links;
  margin-left: 0px;
  grid-row-start: 2;
  grid-column-start: 2;
  grid-column-end: 3;
}



        div {
          margin: 0 auto;
        }

        h1 {
          margin: 0;
          font-size: 30px;
          overflow: hidden;
        }

        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          margin: 0 1rem;
          font-size: 24px;
        }

        a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;