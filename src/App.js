import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Header from './components/Header';
import NavRoutePaths from './navigation/navroutes';
import store from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path={NavRoutePaths.HOME} element={<di>Home</di>} />
          <Route path={NavRoutePaths.MISSION} element={<div>Mission</div>} />
          <Route path={NavRoutePaths.ROCKETS} element={<div>Rockets</div>} />
          <Route path={NavRoutePaths.PROFILE} element={<div>Profile</div>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
