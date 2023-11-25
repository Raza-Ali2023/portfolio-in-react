import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import MyCerts from './components/myCerts';

function App() {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Header openTab={openTab} />
      <About openTab={openTab} />
      <MyCerts />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
