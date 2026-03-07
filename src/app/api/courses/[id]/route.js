import { dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb"; // Required to convert string ID to MongoDB ID

export async function GET(request, { params }) {
  try {
    const { id } = await params; // Get the ID from the URL segment

    // 1. Connect to the collection
    const courseCollection = await dbConnect("courses");

    // 2. Query for the specific course using its ObjectId
    const course = await courseCollection.findOne({ _id: new ObjectId(id) });

    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 },
      );
    }

    // 3. Return the specific course details
    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    console.error("Single Course API Error:", error);
    return NextResponse.json(
      { message: "Invalid ID format or Server Error" },
      { status: 500 },
    );
  }
}
