import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <div className="App">
        <NavigationBar></NavigationBar>
        <div className="content"></div>
      </div>
    </Router>
  );
}

export default App;
