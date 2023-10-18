import { NextRequest, NextResponse } from "next/server";
import Url from "@/models/urlModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET() {
  try {
    const urls = await Url.find();
    return NextResponse.json({
      mesaaage: "Urls found",
      data: urls,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
