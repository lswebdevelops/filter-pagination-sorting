
import './App.css';
import HomePage from './Component';
import { Route, Routes ,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter >
       <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>    
     
     </BrowserRouter>
    </div>
  );
}

export default App;
