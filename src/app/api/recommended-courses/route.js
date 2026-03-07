import { dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

// This line forces the API to fetch fresh data every time (No Caching)
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const courseCollection = await dbConnect("courses");

    // .limit(6) is correct for MongoDB
    const courses = await courseCollection.find({}).limit(6).toArray();

    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch courses" },
      { status: 500 },
    );
  }
}
