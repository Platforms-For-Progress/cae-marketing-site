import { query } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  query(
    `INSERT INTO contact (name, email, message) VALUES ('${name}', '${email}', '${message}')`
  )
    .then(() => {
      return new NextResponse(null, { status: 200 });
    })
    .catch((err) => {
      console.log("err", err);
      return new NextResponse(null, { status: 500 });
    });
}
