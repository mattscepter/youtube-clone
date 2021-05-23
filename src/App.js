import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Recommended from './Recommended';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">


      <BrowserRouter>
      <Header/>
          <Switch>

            <Route path="/search">
              <div className="app__page">
                <Sidebar/>
                <SearchPage/>
              </div>
            </Route>

            <Route path="/">
              <div className="app__page">
                <Sidebar/>
                <Recommended/>
              </div>
            </Route>

          </Switch>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
