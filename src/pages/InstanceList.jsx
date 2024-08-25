import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function InstanceList() {
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/instances/")
      .then((response) => setInstances(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteInstance = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/instances/${id}/`)
      .then(() =>
        setInstances(instances.filter((instance) => instance.id !== id))
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Course Instances</h1>
      <Link
        to="/instances/new"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Instance
      </Link>
      <ul className="mt-4">
        {instances.map((instance) => (
          <li key={instance.id} className="mb-2">
            <Link
              to={`/instances/${instance.year}/${instance.semester}/${instance.id}`}
              className="text-blue-600"
            >
              {instance.course.title} ({instance.year} - Semester{" "}
              {instance.semester})
            </Link>
            <button
              onClick={() => deleteInstance(instance.id)}
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

export default InstanceList;
