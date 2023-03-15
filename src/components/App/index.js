import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Quizz from '../Quizz/Quizz';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Quizz />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/me-contacter" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
