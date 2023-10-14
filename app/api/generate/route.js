import { NextRequest, NextResponse } from "next/server";

export const helper = async (prompt) => {
    const payload = {
        model: "text-davinci-003",
        prompt,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 200,
        n: 1,
      };
    const response = await fetch("https://api.openai.com/v1/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
    console.log('generate helper');
    return response.json();
  }
  

  export async function POST(request){
    try {
        const reqBody = await request.json()
        console.log(reqBody.prompt);
        const res = await helper(reqBody.prompt);
        const response = NextResponse.json({
            message: res,
            success: true,
        })
        console.log(response);
        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}