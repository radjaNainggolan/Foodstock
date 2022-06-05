import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProvider from '../src/contexts/UserContext';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import AllProducts from './pages/AllProducts';
import CategoryProducts from './pages/CategoryProducts';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import Cart from './components/Cart'
function App() {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <NavigationBar></NavigationBar>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/login" element={<LogIn/>}></Route>
              <Route exact path="/signup" element={<SignUp/>}></Route>
              <Route exact path="/profile/:id" element={<Profile/>}></Route>
              <Route exact path="/products" element={<AllProducts/>}></Route>
              <Route exact path="/products/category/:id" element={<CategoryProducts/>}></Route>
              <Route exact path="/product/:id" element={<ProductPage/>}></Route>
            </Routes>
          </div>
          <Cart></Cart>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
