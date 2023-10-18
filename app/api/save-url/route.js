import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Url from "@/models/urlModel";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { newsUrl, newsSummary, newsCategory, newsDate } = reqBody;

    // console.log("save-url line 11", reqBody);

    const newUrl = new Url({
      newsUrl,
      newsSummary,
      newsCategory,
      newsDate,
    });

    const savedUrl = await newUrl.save();
    console.log(savedUrl);

    return NextResponse.json({
      message: "Url created successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
