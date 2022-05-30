import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Categories from './pages/Categories';
function App() {
  

  return (
    <Router>
      <div className="App">
        <NavigationBar></NavigationBar>
        <div className="content">
        <Routes>
          <Route exact path="/categories" element={<Categories/>}></Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
