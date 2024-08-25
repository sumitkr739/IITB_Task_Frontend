import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function InstanceDetails() {
  const { id, year, semester } = useParams();
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/courses/${id}/`)
      .then((response) => setInstance(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!instance) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Course Instance Details</h1>
      <p>
        <strong>Course:</strong> {instance.course.title}
      </p>
      <p>
        <strong>Year:</strong> {year}
      </p>
      <p>
        <strong>Semester:</strong> {semester}
      </p>
      <Link
        to="/instances"
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Back
      </Link>
    </div>
  );
}

export default InstanceDetails;
