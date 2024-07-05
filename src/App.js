import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Homepage from './pages/Home';
import EditPage from './pages/Edit';
import Title from './components/Nav';

function App() {
  return (
    <div className="App">
      <Title />
      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='/edit' element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
