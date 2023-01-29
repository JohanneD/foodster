import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Inventoy from './pages/inventory';
import "./index.css";
import ShoppingListPage from './pages/shoppingListPage';

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="./" exact element= {<Inventoy />} />
              <Route path="./shoppinglist" element={<ShoppingListPage/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
