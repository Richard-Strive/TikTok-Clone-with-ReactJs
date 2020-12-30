import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./App.css";
import Video from "./components/Video";

function App() {
  const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   db.collection("videos").onSnapshot((snapshot) =>
  //     setVideos(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, [videos]);
  /*Carattteristiche useEffect 1. Una funzione che prende due parametri per esguire due tipologie di callback:
  quando abbiamo solo un solo parametro la funzione agisce come un componentDidMount.
  2. Quando aggiungiamo le dipendencies "[]" questa funzione agisce come un component di update quindi quello che viene inserito all'interno delle quadre sara' ascoltato.
  tutte le volte che quella variabile cambia il use effect ri-rendera :)
  In questo caso noi stiamo ascoltando i video
  */
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url="https://v77.tiktokcdn.com/e9908f85843ac86446e5455d96b3ebe3/5fed2cb3/video/tos/alisg/tos-alisg-pve-0037c001/c7776424551f49589da9189a0bd6c669/?a=1233&br=8178&bt=4089&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012301943020101890360815117822E&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3R4NzVseHc3eTMzODczM0ApNGc6OTs6NzszN2lkZ2g8NmdlaWQtNl9fNl9fLS1jMTRzc14uXjY1LmA1Y2IzYmBeMTU6Yw%3D%3D&vl=&vr="
          description="This a simple description"
          song="Richard song"
          likes={100}
          message={2}
          share={7}
          channel="StriveSchoolStudentRichard"
        />
        <Video
          url="https://v77.tiktokcdn.com/e9908f85843ac86446e5455d96b3ebe3/5fed2cb3/video/tos/alisg/tos-alisg-pve-0037c001/c7776424551f49589da9189a0bd6c669/?a=1233&br=8178&bt=4089&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012301943020101890360815117822E&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3R4NzVseHc3eTMzODczM0ApNGc6OTs6NzszN2lkZ2g8NmdlaWQtNl9fNl9fLS1jMTRzc14uXjY1LmA1Y2IzYmBeMTU6Yw%3D%3D&vl=&vr="
          description="This a simple description"
          song="Richard song"
          likes={100}
          message={2}
          share={7}
          channel="StriveSchoolStudentRichard"
        />
        <Video
          url="https://v77.tiktokcdn.com/e9908f85843ac86446e5455d96b3ebe3/5fed2cb3/video/tos/alisg/tos-alisg-pve-0037c001/c7776424551f49589da9189a0bd6c669/?a=1233&br=8178&bt=4089&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012301943020101890360815117822E&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3R4NzVseHc3eTMzODczM0ApNGc6OTs6NzszN2lkZ2g8NmdlaWQtNl9fNl9fLS1jMTRzc14uXjY1LmA1Y2IzYmBeMTU6Yw%3D%3D&vl=&vr="
          description="This a simple description"
          song="Richard song"
          likes={100}
          message={2}
          share={7}
          channel="StriveSchoolStudentRichard"
        />
        <Video
          url="https://v77.tiktokcdn.com/e9908f85843ac86446e5455d96b3ebe3/5fed2cb3/video/tos/alisg/tos-alisg-pve-0037c001/c7776424551f49589da9189a0bd6c669/?a=1233&br=8178&bt=4089&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012301943020101890360815117822E&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3R4NzVseHc3eTMzODczM0ApNGc6OTs6NzszN2lkZ2g8NmdlaWQtNl9fNl9fLS1jMTRzc14uXjY1LmA1Y2IzYmBeMTU6Yw%3D%3D&vl=&vr="
          description="This a simple description"
          song="Richard song"
          likes={100}
          message={2}
          share={7}
          channel="StriveSchoolStudentRichard"
        />
      </div>
    </div>
  );
}

export default App;
// channel={} description={} song={}
