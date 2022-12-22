import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import NavRoutePaths from './navigation/navroutes';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { getRockets } from './redux/slice/rockets/rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={NavRoutePaths.HOME} element={<Home />} />
        <Route path={NavRoutePaths.MISSION} element={<Missions />} />
        <Route path={NavRoutePaths.Home} element={<div>Rockets</div>} />
        <Route path={NavRoutePaths.PROFILE} element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
