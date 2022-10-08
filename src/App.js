import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
function App() {
  return (
    //BEM class name convention
    <div className="app">
      {/* <h1>Hello ,yt clone </h1> */}
      {/* Header--><Header/> */}
      <Header/>
     
      <div className='app__page'>
      {/* Sidebar */}
      <Sidebar />
      {/* Recommended Videos */}
      <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
