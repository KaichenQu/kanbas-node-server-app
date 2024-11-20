import * as dao from "./courseUsers.dao.js";

function CourseUsersRoutes(app) {
  app.get("/api/courses/:courseId/users", (req, res) => {
    const { courseId } = req.params;
    const users = dao.findAllUsersInCourse(courseId);
    res.json(users);
  });

  app.post("/api/courses/:courseId/users", (req, res) => {
    const { courseId } = req.params;
    const currentUser = req.session["currentUser"];
    if (!currentUser || currentUser.role !== "FACULTY") {
      res.status(403).json({ message: "Permission denied" });
      return;
    }
    const enrollment = dao.addUserToCourse(courseId, req.body);
    res.json(enrollment);
  });

  app.delete("/api/courses/:courseId/users/:enrollmentId", (req, res) => {
    const { courseId, enrollmentId } = req.params;
    const currentUser = req.session["currentUser"];
    if (!currentUser || currentUser.role !== "FACULTY") {
      res.status(403).json({ message: "Permission denied" });
      return;
    }
    const status = dao.removeUserFromCourse(courseId, enrollmentId);
    res.json(status);
  });

  app.put("/api/courses/:courseId/users/:enrollmentId", (req, res) => {
    const { enrollmentId } = req.params;
    const currentUser = req.session["currentUser"];
    if (!currentUser || currentUser.role !== "FACULTY") {
      res.status(403).json({ message: "Permission denied" });
      return;
    }
    const status = dao.updateUserInCourse(enrollmentId, req.body);
    if (status) {
      res.json(status);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
}

export default CourseUsersRoutes;
