import connectDB from "@/lib/mongodb";
import Teachers from "@/models/teachers";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { name, email, id, password } = await req.json();
  console.log(name, email, id, password);
  try {
    await connectDB();

    await Teachers.create({ name, email, id, password });

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
    const courses = await Teachers.find({});
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
