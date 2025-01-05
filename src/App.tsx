import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './sections/Home';
import { Download } from './sections/Download';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="download">
          <Download />
        </section>
      </main>
    </div>
  );
}

export default App;