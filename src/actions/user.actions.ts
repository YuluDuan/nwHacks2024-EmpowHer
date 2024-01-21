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


export async function createUser(id: String, email_addresses: Object, first_name: String, last_name: String, imageUrl: String) {
  try {
    await connectToDB();
    const newUser = new User({user_id: id, email: email_addresses, firstName:first_name, lastName:last_name, imageUrl: imageUrl});

    await newUser.save();
    return NextResponse.json({ message: "User created" }, { status: 201 });
} catch (err) {
  console.log(err);
}
}


export async function updateUserContent(id: String, newContent: String) {
  try {
    connectToDB();
    const user = await User.updateOne(
      { user_id: id },
      { $set: { content: newContent } }
   );
   
   return NextResponse.json({ message: "User updated" }, { status: 201 });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}


export async function updateUserInterest(id: String, newInterests: Object) {
  try {
    connectToDB();
    const user = await User.updateOne(
      { user_id: id },
      { $set: { techField: newInterests } }
   );
   
   return NextResponse.json({ message: "User updated" }, { status: 201 });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function matchUser(id: String) {
  try {
    connectToDB();
    const user = await User.findOne({ user_id: id });
    const users = await User.find({ techField : { $in: user.techField } });
   return users
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}