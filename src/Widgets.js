import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widget__headers">
        <h2>Linked News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Google is closer now", "Top goal of the month")}
      {newsArticle("Google is closer now", "Top goal of the month")}
      {newsArticle("Google is closer now", "Top goal of the month")}
      {newsArticle("Google is closer now", "Top goal of the month")}
      {newsArticle("Google is closer now", "Top goal of the month")}
    </div>
  );
}

export default Widgets;
