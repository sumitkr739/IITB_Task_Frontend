import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/courses/${id}/`)
      .then((response) => setCourse(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!course) return <div>Loading...</div>;
  else{
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p>
        <strong>Course Code:</strong> {course.course_code}
      </p>
      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded">
        Back
      </Link>
    </div>
  );
}
}
export default CourseDetails;
