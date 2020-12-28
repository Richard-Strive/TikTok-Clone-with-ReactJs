import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <h1>Hello DevRichard, let's build tiktok clone!</h1>
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
