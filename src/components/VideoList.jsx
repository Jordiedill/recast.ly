import exampleVideoData from "../data/exampleVideoData";

class VideoListItems extends React.Component  {

  constructor (props){
    super(props);
  }

  render() {

    return(
      <div><h5><em>{this.props.item.title}</em> view goes here</h5></div>
    )


  }


}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

const VideoList = (props) => {
  <div className="video-list">
    {props.items.map(item =>
      <VideoListItems item={item}/>
      )}
  </div>
}
console.log(exampleVideoData);
ReactDOM.render(<VideoList items={[exampleVideoData]}/>, document.getElementById("app"))

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
