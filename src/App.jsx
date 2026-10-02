import React from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <div className="min-h-screen relative text-white">
      {/* Interactive/Animated Background */}
      <div className="fixed inset-0 z-[-1] bg-[#0a0a0f]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <main className="pt-10">
        <Hero />
        <BentoGrid />
      </main>

      <footer className="text-center py-8 text-textMuted border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Inkmind.tech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
