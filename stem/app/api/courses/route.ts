import connectDB from "@/lib/mongodb";
import Courses from "@/models/courses";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { name, teacher, teacherId, code } = await req.json();
  console.log(name, teacher, teacherId, code);
  try {
    await connectDB();

    await Courses.create({ name, teacher, teacherId, code });

    return NextResponse.json({
      msg: "Request sent sucessfully",
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = [];
      for (const e in error.errors) {
        errorList.push(e);
      }

      return NextResponse.json({
        msg: errorList,
      });
    } else {
      return NextResponse.json({
        msg: "Unable to send request",
      });
    }
  }
}

export async function GET(req: any) {
  try {
    await connectDB();
    const courses = await Courses.find({});
    const names = [];
    console.log(courses);
    for (let i = 0; i < courses.length; i++) {
      names.push(courses[i].name);
    }
    return NextResponse.json({ names });
  } catch (error) {
    console.log(error);
  }
}
