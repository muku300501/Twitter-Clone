import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__seacrhIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed
          className="widgets__tweet"
          tweetId={"1259748476574855168"}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RNTata2000"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={
            "https://pbs.twimg.com/media/EUMNHHsUUAACl2d?format=jpg&name=900x900"
          }
          options={{
            text:
              "The COVID 19 crisis is one of the toughest challenges we will face as a race. The Tata Trusts and the Tata group companies have in the past risen to the needs of the nation. At this moment, the need of the hour is greater than any other time.",
            via: "RNTata2000",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
