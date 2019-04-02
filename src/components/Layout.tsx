import React from 'react';

import { Navbar } from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { Music } from './Music';
import { Contact } from './Contact';

import './Layout.scss';

export function Layout() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Music />
      <About />
      <Contact />
  </div>
  );
}
