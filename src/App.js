import './App.css';
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App d-flex flex-column vh-100">
      <Navbar />
      
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
