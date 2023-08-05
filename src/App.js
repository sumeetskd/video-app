import './App.css';
import ReactPlayer from "react-player";

function App() {
  const vidUrl = "https://www.youtube.com/shorts/QMZc_7Lm2cc";
  const vidUrl1 = "https://www.youtube.com/shorts/M2CG3g9WSm4";
  const imgUrl = "https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png";
  return (
    <div className="App">
      <header className="App-header">
        <h3>Looking for Batman?</h3>
        <img src={imgUrl} class="batman-logo" height = "200" width = "300" alt="Batman"/>
        <ReactPlayer 
          url={vidUrl}
          playing={true}
          volume={0.5}
          loop={true}
          controls={true}
          light={true}
          width="360px"
        />
        <ReactPlayer 
          url={vidUrl1}
          playing={false}
          volume={0.5}
          loop={true}
          controls={true}
          light={true}
          width="360px"
        />
      </header>
    </div>
  );
}

export default App;
