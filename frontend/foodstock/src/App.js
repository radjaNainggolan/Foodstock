import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Categories from './pages/Categories';
import UserProvider from '../src/contexts/UserContext';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
function App() {
  

  return (
    <Router>
      <UserProvider>
        <div className="App">
          <NavigationBar></NavigationBar>
          <div className="content">
          <Routes>
            {/* <Route exact path="/categories" element={<Categories/>}></Route> */}
            <Route exact path="/login" element={<LogIn/>}></Route>
            <Route exact path="/signup" element={<SignUp/>}></Route>
          </Routes>
          </div>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
