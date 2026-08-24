import React, { useState } from 'react';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} handleSearch={handleSearch} />
      <Home searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default App;
