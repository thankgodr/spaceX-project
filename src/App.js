import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavRoutePaths from './navigation/navroutes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={NavRoutePaths.HOME} element={<di>Home</di>} />
        <Route path={NavRoutePaths.MISSION} element={<div>Mission</div>} />
        <Route path={NavRoutePaths.ROCKETS} element={<div>Rockets</div>} />
        <Route path={NavRoutePaths.PROFILE} element={<div>Profile</div>} />
      </Routes>
    </div>
  );
}

export default App;
