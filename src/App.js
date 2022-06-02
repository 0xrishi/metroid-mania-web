import { useEffect, useState } from 'react'

import Background from "./components/Background";
import Player from './components/Player';
import BarrelElevator from "./components/BarrelElevator";

function App() {
  // Scroll Logic
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      var scrolled = (winScroll / height) * 100;
      setScrollPosition(scrolled);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className="App">
      <Background scrollPosition={scrollPosition}/>
      <BarrelElevator scrollPosition={scrollPosition}/>
      <Player scrollPosition={scrollPosition} />
    </div>
  );
}

export default App;
