import { query } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();
  //   console.log("here");
  query(`INSERT INTO subscribe (email) VALUES ('${email}')`)
    .then(() => {
      //   console.log("Phew");
      return new NextResponse(null, { status: 200 });
    })
    .catch((err) => {
      //   console.log("Error", err);
      return new NextResponse(null, { status: 500 });
    });
}
