import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='container'>
        <Header />
        <div className='inner-container'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
