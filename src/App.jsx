import React from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <div className="min-h-screen">
      {/* Background decoration */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
      
      <main>
        <Hero />
        <BentoGrid />
      </main>

      <footer className="text-center py-8 text-textMuted border-t border-white/5">
        <p>© {new Date().getFullYear()} Inkmind.tech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
