import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import "../VideoFooter.css";

export default function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@RichardStriveSchool</h3>
        <p>
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>This is my Tiktok clone.</p>
              </>
            )}
          </Ticker>
          <MusicNoteIcon />
        </p>
      </div>
      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}
