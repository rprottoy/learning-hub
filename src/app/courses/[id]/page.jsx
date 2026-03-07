import Image from "next/image";

const CourseDetails = async ({ params }) => {
  const { id } = await params;

  // Fetch from the API endpoint you just created
  const res = await fetch(
    `https://learning-hub-sepia.vercel.app/api/courses/${id}`,
    {
      cache: "no-store",
    },
  );

  const course = await res.json();

  if (!res.ok) {
    return <div className="p-20 text-center">Course not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-5">
      <div className="relative w-full h-96 mb-10">
        <Image
          src={course.image || "/assets/placeholder.png"}
          alt={course.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-xl text-gray-600 mb-6">{course.description}</p>

      <div className="flex items-center justify-between p-6 bg-slate-100 rounded-lg">
        <div>
          <p className="text-sm text-gray-500 uppercase">Instructor</p>
          <p className="font-semibold text-lg">{course.instructor}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">Price</p>
          <p className="font-bold text-2xl text-primary">${course.price}</p>
        </div>
        <button className="bg-[#ff4d6d] text-white px-10 py-3 rounded-md font-bold">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
