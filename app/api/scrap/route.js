// import {connect} from "@/dbConfig/dbConfig";
import  cheerio  from "cheerio";
import { NextRequest, NextResponse } from "next/server";


// connect()

import request from "request";

export  const helper = async (url) => {
   const res = fetch(url)
    .then(resp=> resp.text()).then(body => {
        console.log(body);
        const $ = cheerio.load(body)
        // console.log($("p").text())
        return $("p").text()
    }) ;
    return res;
}


export async function POST(request){
    // console.log(request);

    try {

        const reqBody = await request.json()
        console.log(reqBody.link);
        const res = await helper(reqBody.link);
        const response = NextResponse.json({
            message: res,
            success: true,
        })

        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}