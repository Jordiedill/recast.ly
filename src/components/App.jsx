import VideoPlayer from "./VideoPlayer.js"
import VideoList from "./VideoList.js"
import exampleVideoData from "../data/exampleVideoData.js"
import Search from "./Search.js"
import VideoListEntry from "./VideoListEntry.js"

Class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    videos: window.exampleVideoData,
    currentVideo: window.exampleVideoData[0];
  }
}
render() {
  return (
    <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        {/* <div><h5><em>search</em> view goes here</h5></div> */}
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
        <VideoPlayer video={exampleVideoData[0]}/>
      </div>
      <div className="col-md-5">
        {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
        <VideoList videos={exampleVideoData}/>
      </div>
    </div>
  </div>
  )
}

);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
