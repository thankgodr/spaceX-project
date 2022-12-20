import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import NavRoutePaths from './navigation/navroutes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={NavRoutePaths.HOME} element={<div>Home</div>} />
        <Route path={NavRoutePaths.MISSION} element={<Missions/>} />
        <Route path={NavRoutePaths.ROCKETS} element={<div>Rockets</div>} />
        <Route path={NavRoutePaths.PROFILE} element={<div>Profile</div>} />
      </Routes>
    </div>
  );
}

export default App;
