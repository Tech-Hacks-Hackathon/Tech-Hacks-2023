import connectDB from "@/lib/mongodb";
import Teachers from "@/models/teachers";
import Students from "@/models/students";
import Courses from "@/models/courses";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    await connectDB();
    const courses = await Teachers.find({});
    const names = [];
    console.log(courses);
    for (let i = 0; i < courses.length; i++) {
      names.push(courses[i].name);
    }
    if (courses.length > 1) {
      return NextResponse.json("");
    }
    return NextResponse.json({ names });
  } catch (error) {
    console.log(error);
  }
}
