import { query } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email) return NextResponse.json({ message: "No email" });
  try {
    await query(`INSERT INTO subscribe (email) VALUES ('${email}')`);
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ message: "Error" });
  }
}
