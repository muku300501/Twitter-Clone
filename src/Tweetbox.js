import React, { useState } from "react";
import db from "./firebase";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Mukund Chamariya",
      username: "mukund_chamariya",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/82660695_165746604714449_4953850631082213376_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=GGYJ4NdSt3IAX-fq58d&_nc_tp=25&oh=155f94da90fd646f1705231278a4d814&oe=5FD8143C",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/82660695_165746604714449_4953850631082213376_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=GGYJ4NdSt3IAX-fq58d&_nc_tp=25&oh=155f94da90fd646f1705231278a4d814&oe=5FD8143C"
            alt=""
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__inputImage"
          placeholder="Optional: Enter Image url"
          type="text"
        />
        <Button
          disabled={!(tweetMessage || tweetImage)}
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
