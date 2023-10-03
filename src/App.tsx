import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import content from './content';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className='font-custom-font text-custom-fontsize'>
      <Header />
      <div className="container mx-auto p-4 flex flex-col items-center">
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;