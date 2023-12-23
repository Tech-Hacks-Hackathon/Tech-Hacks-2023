import connectDB from "@/lib/mongodb";
import Students from "@/models/students";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { name, email, roll, password } = await req.json();
  console.log(name, email, roll, password);
  try {
    await connectDB();

    await Students.create({ name, email, roll, password });

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
    const courses = await Students.find({});
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

// export async function GET(request: any) {
//   await connectDB();
//   const email = request.nextUrl.searchParams.get("email");
//   const visitors = await Students.find({ email });
//   return NextResponse.json({ visitors });
// }
