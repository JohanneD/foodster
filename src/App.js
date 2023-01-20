import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Inventoy from './pages/inventory';
import Shoppinglist from './pages/shoppinglist';
import "./index.css";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" exact element= {<Inventoy />} />
              <Route path="/shoppinglist" element={<Shoppinglist/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
