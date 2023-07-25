import React from "react";

import { useEffect, useState } from "react";

import axios from "axios";

import "./style.css";

import SingleCardOfNews from "./SingleNewsCard";

function Content() {
  const [dataStatus, setDataStatus] = useState("Loading");
  const [contentArr, setContentArr] = useState([]);

  useEffect(() => {
    // console.log("Sbse , Phle to main hi Aya");

    async function getData() {
      try {
        const request = await axios(
          "https://free-apis-back-end.vercel.app/newsac/top-headlines"
        );

        // console.log(request);
        // console.log(request.data);
        // console.log(request.data.status);

        // // // Some If

        // // // Not working now ---->
        if (!request.data.status) {
          alert(request.data.message);
          return setDataStatus("Data not Found");
        }

        setContentArr(request.data.data.articles);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <main id="main_container">
      <h1 style={{ textAlign: "center" }}>NEWSac.com</h1>
      <p style={{ textAlign: "center" }}>All latest NEWS here</p>

      {contentArr.length > 0 ? (
        <div>
          {contentArr.map((el, i) => {
            return (
              <SingleCardOfNews
                key={i}
                urlToImage={el.urlToImage}
                title={el.title}
                author={el.author}
                publishedAt={el.publishedAt}
                description={el.description}
                url={el.url}
                sourceName={el.source.name}
              />
            );
          })}
        </div>
      ) : (
        <h1>{dataStatus}</h1>
      )}
    </main>
  );
}

export default Content;
