import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "./pages/CourseList";
import CreateCourse from "./pages/Createcourse";
import CourseDetails from "./pages/CourseDetails";
import CreateInstance from "./pages/CreateInstance";
import InstanceList from "./pages/InstanceList";
import InstanceDetails from "./pages/InstanceDetails";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/new/" element={<CreateCourse />} />
        <Route path="/courses/:id/" element={<CourseDetails />} />
        <Route path="/instances/new/" element={<CreateInstance />} />
        <Route path="/instances/" element={<InstanceList />} />
        <Route
          path="/instances/:year/:semester/:id/"
          element={<InstanceDetails />}
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
