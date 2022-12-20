import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Missions from './components/Missions';
import NavRoutePaths from './navigation/navroutes';
import store from './redux/configureStore';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path={NavRoutePaths.HOME} element={<Home />} />
          <Route path={NavRoutePaths.MISSION} element={<Missions/> } />
          <Route path={NavRoutePaths.Home} element={<div>Rockets</div>} />
          <Route path={NavRoutePaths.PROFILE} element={<Profile />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
