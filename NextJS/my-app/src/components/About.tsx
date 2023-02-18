import React from 'react';
import Link from 'next/link';
import withNavbar from './withNavbar';

const About = () => {
    return (
      <div style={{
        backgroundImage: `url(/construction.jpg)`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#333',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div>
          <h1>About Page</h1>
          <Link href="/">
            Back to Home
          </Link>
        </div>
      </div>
    );
  };
  

export default withNavbar(About);