import Database from "../Database/index.js";

export const findAllAssignments = () => {
  return Database.assignments;
};

export const findAssignmentById = (aid) => {
  return Database.assignments.find((a) => a._id === aid);
};

export const findAssignmentsForCourse = (courseId) => {
  return Database.assignments.filter((a) => a.course === courseId);
};

export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: new Date().getTime().toString() };
  Database.assignments.push(newAssignment);
  return newAssignment;
};

export const updateAssignment = (aid, assignment) => {
  Database.assignments = Database.assignments.map((a) =>
    a._id === aid ? { ...a, ...assignment } : a
  );
  return findAssignmentById(aid);
};

export const deleteAssignment = (aid) => {
  Database.assignments = Database.assignments.filter((a) => a._id !== aid);
  return { status: "OK" };
};
