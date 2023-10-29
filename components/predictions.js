import React from "react";

export const Predictions = ({ newsUrl, newsCategory }) => {
  return (
    // <div className="flex items-center justify-evenly max-width px-10">
    //   <div className="flex items-left justify-evenly py-4 px-10">{newsUrl}</div>
    //   <div className="flex items-center justify-right py-4 px-10">
    //     {newsCategory}
    //   </div>
    // </div>

    <div className="max-w-screen overflow-hidden rounded-xl bg-white m-4 p-4">
      <div className="flex  justify-center py-4 mx-8  text-justify">
        {newsUrl}
      </div>
      <div className="flex items-center justify-center py-1 px-10">
        {newsCategory}
      </div>
    </div>
  );
};
