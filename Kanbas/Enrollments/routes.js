import * as dao from "./dao.js";

function EnrollmentRoutes(app) {
  app.get("/api/courses/:cid/enrollments", (req, res) => {
    const { cid } = req.params;
    const enrollments = dao.findEnrollmentsForCourse(cid);
    res.json(enrollments);
  });

  app.post("/api/courses/:cid/enrollments", (req, res) => {
    const { cid } = req.params;
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.status(401).json({ message: "Please sign in first" });
      return;
    }

    const enrollment = dao.enrollUserInCourse(currentUser._id, cid);
    res.json(enrollment);
  });

  app.delete("/api/courses/:cid/enrollments", (req, res) => {
    const { cid } = req.params;
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.status(401).json({ message: "Please sign in first" });
      return;
    }

    const status = dao.unenrollUserFromCourse(currentUser._id, cid);
    res.json(status);
  });

  app.get("/api/users/:uid/enrollments", (req, res) => {
    const { uid } = req.params;
    const enrollments = dao.findEnrollmentsForUser(uid);
    res.json(enrollments);
  });

  app.get("/api/courses/:cid/enrollments/check", (req, res) => {
    const { cid } = req.params;
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.json({ enrolled: false });
      return;
    }

    const enrolled = dao.isUserEnrolledInCourse(currentUser._id, cid);
    res.json({ enrolled });
  });
}

export default EnrollmentRoutes;
