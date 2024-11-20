import * as dao from "./dao.js";

function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
    };
    const actualAssignment = dao.createAssignment(newAssignment);
    res.json(actualAssignment);
  });

  app.get("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignment = dao.findAssignmentById(aid);
    res.json(assignment);
  });

  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const status = dao.updateAssignment(aid, req.body);
    res.json(status);
  });

  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const status = dao.deleteAssignment(aid);
    res.json(status);
  });
}

export default AssignmentRoutes;
