
import model from "./model.js";

export const findAssignmentsForCourse = (courseId) => {
  return model.find({ course: courseId });
};

export const createAssignment = (assignment) => {
  delete assignment._id;
  return model.create(assignment);
};

export const updateAssignment = (aid, assignment) => {
  return model.updateOne({ _id: assignmentId }, assignmentUpdates);
};

export const deleteAssignment = (aid) => {
  return model.deleteOne({ _id: assignmentId });
};
