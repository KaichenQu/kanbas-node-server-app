import Database from "../Database/index.js";

export const findAllEnrollments = () => {
  return Database.enrollments;
};

export const findEnrollmentById = (eid) => {
  return Database.enrollments.find((e) => e._id === eid);
};

export const findEnrollmentsForCourse = (courseId) => {
  return Database.enrollments.filter((e) => e.course === courseId);
};

export const findEnrollmentsForUser = (userId) => {
  return Database.enrollments.filter((e) => e.user === userId);
};

export const enrollUserInCourse = (userId, courseId) => {
  const enrollment = {
    _id: new Date().getTime().toString(),
    user: userId,
    course: courseId,
  };
  Database.enrollments.push(enrollment);
  return enrollment;
};

export const unenrollUserFromCourse = (userId, courseId) => {
  Database.enrollments = Database.enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
  return { status: "OK" };
};
