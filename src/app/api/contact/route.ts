import { query } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message)
    return NextResponse.json({ message: "Missing field(s)" });
  try {
    await query(
      `INSERT INTO contact (name, email, message) VALUES ('${name}', '${email}', '${message}')`
    );
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
