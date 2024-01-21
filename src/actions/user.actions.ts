"use server"

import { connectToDB } from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";



export async function fetchUser(userId: string) {
  try {
    connectToDB();
    const user = await User.findOne({ user_id: userId });
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}


export async function createUser(id: String, email_addresses: Object, first_name: String, last_name: String) {
  try {
    await connectToDB();
    const newUser = new User({user_id: id, email: email_addresses, firstName:first_name, lastName:last_name});

    await newUser.save();
    return NextResponse.json({ message: "User created" }, { status: 201 });
} catch (err) {
  console.log(err);
}
}