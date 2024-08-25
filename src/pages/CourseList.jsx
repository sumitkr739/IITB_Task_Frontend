import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/courses/")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteCourse = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/courses/${id}/`)
      .then(() => setCourses(courses.filter((course) => course.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <Link
        to="/courses/new/"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Course
      </Link>
      <ul className="mt-4">
        {courses.map((course) => (
          <li key={course.id} className="mb-2">
            <Link to={`/courses/${course.id}/`} className="text-blue-600">
              {course.title}
            </Link>
            <button
              onClick={() => deleteCourse(course.id)}
              className="text-red-600 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
