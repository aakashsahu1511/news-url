"use client";

import axios from "axios";
import { Cheerio } from "cheerio";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [generatedNews, setGeneratedNews] = useState('')
  const [linkObj, setLinkObj] = React.useState({
    link: "",
  })
  const [promptObj, setPromptObj] = React.useState({
    prompt : ""
  })
 
  useEffect(() => {
    ScrapNews();
  }, )
  
  const ScrapNews = async () => { 
    // useEffect(() => {
    //   async () => {
        try {
          const response = await axios.post("/api/scrap" , linkObj);
          // console.log("Scrap success", response.data.message);
          // setGeneratedNews(response.data.message);
          setPromptObj({...promptObj ,prompt : `Return the category of news ${response.data.message.substring(0,200)}`})
        } catch (error) {
          console.log("Scrap failed", error.message);
        }
      // return <></>    
    // }, [])  
  }
  // console.log(promptObj,'generated news');
  
  const generate = async () => {
    console.log('generate called');
    // try {
    //   console.log('hello');
    //   const response = await axios.post("/api/generate" , promptObj);
    //   console.log("generate success", response.data.message.choices[0].text);
      
    // } catch (error) {
    //     console.log("generate failed", error.message);
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <label>Paste the news link here</label>
        <input 
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="newsLink"
          type="text"
          // value={user.username}
          onChange={(e) => setLinkObj({...linkObj,link : e.target.value})}
          placeholder="News Link"
        />
        <button
          onClick={async ()=>{
            await ScrapNews();
            console.log(promptObj.prompt);
            generate();
          }}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
          Show news details
        </button>
    </div>
  )
}
