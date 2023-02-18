import React from 'react';
import Navbar from './Navbar';

const withNavbar = (WrappedComponent: React.FC) => {
  return (props: any) => (
    <div>
      <Navbar />
      <WrappedComponent {...props} />
    </div>
  );
};

export default withNavbar;

