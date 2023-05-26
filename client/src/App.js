import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route></Route>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;