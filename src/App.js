import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
function App() {
  return (
    //BEM class name convention
    <div className="app">
      <Router>
      <Header/>
        <Switch>
         
          <Route path='/search/:searchTerm'>
            
            <h1>Search Page</h1>
          </Route>
         
         
      {/* <h1>Hello ,yt clone </h1> */}
      {/* Header--><Header/> */}
      
      <Route path='/'>
      
     
      <div className='app__page'>
      
      <Sidebar /> 
      {/* Recommended Videos */}
      <RecommendedVideos />
     
      </div> 
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
