
import {BrowserRouter , Route ,Switch} from 'react-router-dom'
import Navbar from './Components/Navgation'
import Home from './Components/Home'
import View from './Components/View'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view" component={View} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
