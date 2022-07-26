import './App.css';
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar';
import { CartContextProvider } from './components/CartContext';
function App() {
  return (
    <CartContextProvider>
    <div className="App d-flex flex-column vh-100">
      <Navbar />
      <main>
        <Outlet/>
      </main>
    </div>
    </CartContextProvider>
  );
}

export default App;
