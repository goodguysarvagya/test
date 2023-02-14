import React, { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 fixed" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <div className="flex-1 justify-center">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Home
          </a>
          <a href="#responsive-header" className="btn btn-ghost normal-case text-xl">
            Explore
          </a>
          <a href="#responsive-header" className="btn btn-ghost normal-case text-xl">
            Gallery
          </a>
          <a href="/imageupload" className="btn btn-ghost normal-case text-xl">
            Upload
          </a>
        </div>
    </nav>
  );
};

export default Navbar;