import React from "react";

export const UrlDetails = ({
  newsUrl,
  newsSummary,
  newsCategory,
  newsDate,
}) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center py-4 px-10">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl py-2">
          News Summary
        </h2>
        {newsSummary}
      </div>
      <div className="flex flex-col items-center justify-center py-4 px-10">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl py-2">
          News Category
        </h2>
        {newsCategory}
      </div>
    </div>
    // <>Hello</>
  );
};
