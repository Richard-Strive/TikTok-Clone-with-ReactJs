import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import SideBar from "./SideBar";
import "../Video.css";

export default function Video() {
  const videoRef = useRef(null);
  /* Used to connect to out DOM element e.g document.querySelector("video_player") */
  const [playing, setPlaying] = useState(false);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  /* Riguardare la funzione qui sopra... */

  return (
    <div className="video">
      {/* <iframe
        title="Youtube"
        width="420"
        height="345"
        src="https://v77.tiktokcdn.com/17f05ebe868925800299f9ebbc86967d/5feac00a/video/tos/alisg/tos-alisg-pve-0037c001/aaad28f1badf4fb1a1bf98a8ea08ff9f/?a=1233&amp;br=1902&amp;bt=951&amp;cd=0%7C0%7C0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=6&amp;er=&amp;l=202012282334530101890482205526C439&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=5&amp;rc=anNpNmd5dmY6eDMzOTczM0ApNDM0N2hoZGVnN2c6ZDhoOGduZ29oNl9kcmlfLS1hMTRzczVeMDIwYTQtYzA0MzYtMi06Yw%3D%3D&amp;vl=&amp;vr="
      ></iframe> */}
      <video
        className="video_player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v77.tiktokcdn.com/b28b77b0f32e596810288c15c9151c12/5feca8d1/video/tos/alisg/tos-alisg-pve-0037c001/c340f490eb04453683a6365e181e1d5c/?a=1233&br=3618&bt=1809&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20201230102021010189049225250305CE&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajtoc2V2eHd2eDMzZTczM0ApOjtoMzw8NmRlNzRoNWk1O2dfYm1kbC02MTNfLS1hMTRzczQtNTRjYzMuLmE2MmAzYWA6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter
        channel="MTV"
        description="Billie it's not my lover"
        song="Michael Jackson"
      />
      <SideBar />
    </div>
  );
}
