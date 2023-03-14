import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Header from '../Header/Header';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/a-propos" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
