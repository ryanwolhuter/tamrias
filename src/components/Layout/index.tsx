import React from 'react';

import { PageDimensionsProvider } from '../../PageDimensionsProvider';
import Background from './Background';
import Navbar from './Navbar';

import Home from '../Home';
import About from '../About';
import Music from '../Music';
import Work from '../Work';
import Contact from '../Contact';

import './Layout.scss';

export default function Layout() {
  return (
    <PageDimensionsProvider>
      <div className="container">
        <Background />
        <Navbar />
        <Home />
        <Music />
        <Work />
        <About />
        <Contact />
      </div>
    </PageDimensionsProvider>
  );
}
