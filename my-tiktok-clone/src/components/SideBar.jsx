import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import "../SideBar.css";

export default function SideBar() {
  const [liking, useLiking] = useState(false);

  return (
    <div className="videoSideBar">
      <dv className="videoSideBar_button">
        <FavoriteBorderIcon />
        <p>1200</p>
      </dv>
      <dv className="videoSideBar_button">
        <ChatIcon />
        <p>3400</p>
      </dv>
      <dv className="videoSideBar_button">
        <ShareIcon />
        <p>80</p>
      </dv>
      {/* <h1>I am a sidebar</h1> */}
    </div>
  );
}
