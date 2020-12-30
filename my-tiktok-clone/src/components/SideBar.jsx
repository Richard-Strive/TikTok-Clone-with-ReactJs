import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import "../SideBar.css";

export default function SideBar({ likes, share, message }) {
  const [liking, UseLiking] = useState(false);

  const handleHeart = () => {
    if (liking) {
      UseLiking(false);
    } else {
      UseLiking(true);
    }
  };

  return (
    <div className="videoSideBar">
      <dv className="videoSideBar_button" onClick={handleHeart}>
        {liking ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liking ? likes + 1 : likes}</p>
      </dv>
      <dv className="videoSideBar_button">
        <ChatIcon fontSize="large" />
        <p>{message}</p>
      </dv>
      <dv className="videoSideBar_button">
        <ShareIcon fontSize="large" />
        <p>{share}</p>
      </dv>
      {/* <h1>I am a sidebar</h1> */}
    </div>
  );
}
