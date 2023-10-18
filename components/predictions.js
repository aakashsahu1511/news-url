import React from "react";

export const Predictions = ({ newsUrl, newsCategory }) => {
  return (
    // <div className="flex items-center justify-evenly max-width px-10">
    //   <div className="flex items-left justify-evenly py-4 px-10">{newsUrl}</div>
    //   <div className="flex items-center justify-right py-4 px-10">
    //     {newsCategory}
    //   </div>
    // </div>

    <div className="flex items-center justify-between">
      <div className="flex flex-col items-left justify-center py-4 px-10 w-13">
        {newsUrl}
      </div>
      <div className="flex flex-col items-center justify-center py-4 px-10">
        {newsCategory}
      </div>
    </div>
  );
};
