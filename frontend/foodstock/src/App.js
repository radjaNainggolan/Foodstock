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
import {  Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import {options} from './contexts/AlertOptions';
import Footer from './components/Footer';
import LastOrder from './pages/LastOrder';

function App() {
  return (
    <Router>
      <UserProvider>
          <div className="App">
            <NavigationBar></NavigationBar>
            <AlertProvider template={AlertTemplate} {...options} >
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/login" element={<LogIn/>}></Route>
                <Route exact path="/signup" element={<SignUp/>}></Route>
                <Route exact path="/profile/:id" element={<Profile/>}></Route>
                <Route exact path="/products" element={<AllProducts/>}></Route>
                <Route exact path="/products/category/:id" element={<CategoryProducts/>}></Route>
                <Route exact path="/product/:id" element={<ProductPage/>}></Route>
                <Route exact path="/profile/:id/order/:orderID" element={<LastOrder/>}></Route>
              </Routes>
            <Footer></Footer>
            </div>
            <Cart></Cart>
            </AlertProvider>
          </div>
      </UserProvider>
    </Router>
  );
}

export default App;
