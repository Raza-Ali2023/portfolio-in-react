import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Header openTab={openTab} />
      <About openTab={openTab} />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
