import { dbConnect } from "@/app/lib/dbConnect"; // Adjust the path to your db file
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Connect to the "courses" collection using your helper
    const courseCollection = await dbConnect("courses");

    console.log(courseCollection);

    // 2. Fetch all documents and convert to an array
    const courses = await courseCollection.find({}).toArray();

    // 3. Return the data as JSON
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch courses" },
      { status: 500 },
    );
  }
}
