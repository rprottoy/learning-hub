export const getCourses = async () => {
  try {
    // Replace with your actual domain in production (e.g., https://yourdomain.com)
    // In local development, Next.js handles relative paths in Server Components
    // but sometimes requires the full URL.
    const res = await fetch(
      "https://learning-hub-sepia.vercel.app/api/courses",
      {
        cache: "no-store", // Ensures you always get fresh data from MongoDB
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch courses");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading courses: ", error);
    return [];
  }
};
