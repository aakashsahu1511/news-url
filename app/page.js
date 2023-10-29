"use client";

import { Predictions } from "@/components/predictions";
import { UrlDetails } from "@/components/url-details";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [linkObj, setLinkObj] = React.useState({
    link: "",
  });
  let promptObj = {
    link: "",
    prompt: "",
  };
  const [urlDetails, setUrlDetails] = useState();
  const [previousPredictions, setPreviousPredictions] = useState();

  const ScrapNews = async () => {
    try {
      const response = await axios.post("/api/scrap", linkObj);
      promptObj.link = linkObj.link;
      promptObj.prompt = `Return the summary and the category of news ${response.data.message.substring(
        0,
        200
      )}
        returned text must be pure json object example text = {"summary" : "summary" , "category" : "category"}`;
      // console.log(promptObj);
      generate(promptObj);
    } catch (error) {
      console.log("Scrap failed", error.message);
    }
  };

  const generate = async (promptObj) => {
    console.log("generate called");
    try {
      const response = await axios.post("/api/generate", promptObj);
      console.log(
        "generate success",
        JSON.parse(response.data.message.choices[0].text)
      );
      const date = new Date();
      const urlObj = {
        newsUrl: promptObj.link,
        newsSummary: JSON.parse(response.data.message.choices[0].text).summary,
        newsCategory: JSON.parse(response.data.message.choices[0].text)
          .category,
        newsDate: date.getDate(),
      };
      setUrlDetails(urlObj);
      // console.log(urlObj);
      saveUrl(urlObj);
    } catch (error) {
      console.log("generate failed", error.message);
    }
  };

  const saveUrl = async (urlObj) => {
    try {
      const response = await axios.post("/api/save-url", urlObj);
      // console.log(response.data);
    } catch (error) {
      console.log("save url failed", error.message);
    }
  };

  const GetPreviousPredictions = async () => {
    try {
      const response = await axios.get("/api/predictions");
      // console.log(response.data.data);
      setPreviousPredictions(response.data.data);
    } catch (error) {
      console.log("Get Predictions failed", error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-100 justify-center">
      <label>
        <h1 className="text-3xl align-text-top items-center font-bold tracking-tight text-gray-900 sm:text-5xl py-6 px-10">
          Paste your news link and stay informed with a single click
        </h1>
      </label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="newsLink"
        type="text"
        // value={user.username}
        onChange={(e) => setLinkObj({ ...linkObj, link: e.target.value })}
        placeholder="News Link"
      />
      <button
        onClick={async () => {
          await ScrapNews();
        }}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-200 bg-blue-600 text-white"
      >
        Show news details
      </button>
      {urlDetails === undefined ? <></> : <UrlDetails {...urlDetails} />}
      <button
        onClick={async () => {
          await GetPreviousPredictions();
        }}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-200 bg-blue-600 text-white"
      >
        Show previous predictions
      </button>

      {previousPredictions === undefined ? (
        <></>
      ) : (
        <div className="py-2">
          <h3 className="text-3xl items-center font-bold tracking-tight text-gray-900 sm:text-3xl py-2 px-10">
            Previous predictions
          </h3>
          {/* {console.log(previousPredictions)} */}
          {previousPredictions.map((prediction) => {
            return <Predictions key={prediction} {...prediction} />;
          })}
        </div>
      )}
    </div>
  );
}
