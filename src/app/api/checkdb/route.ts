import { connectToDB } from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  const con = await connectToDB();
  console.log("hit db connect", new Date().getSeconds());
  return new NextResponse("connected and disconnected");
}