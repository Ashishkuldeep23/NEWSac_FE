import React from "react";

import "./style.css";

function SingleCardOfNews({
  urlToImage,
  title,
  author,
  publishedAt,
  description,
  url,
  sourceName,
}) {
  //   console.log(
  //     urlToImage,
  //     title,
  //     author,
  //     publishedAt,
  //     description,
  //     url,
  //     sourceName
  //   );

  return (
    <div className="singe_card">
      <img src={urlToImage} alt={sourceName} />
      <h5>{title}</h5>

      <div className="side_by_side">
        <p className="author_of_article">{author}</p>
        <p>{publishedAt}</p>
      </div>

      <p>{description}</p>
      <i>By -: {sourceName}{"  "}</i>
      <a href={url}>Open</a>
    </div>
  );
}

export default SingleCardOfNews;
