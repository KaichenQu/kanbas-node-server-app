import Database from "../Database/index.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export const findAllUsersInCourse = (courseId) => {
  const enrollments = enrollmentsDao.findEnrollmentsForCourse(courseId);
  return enrollments.map((enrollment) => {
    const user = Database.users.find((user) => user._id === enrollment.user);
    return {
      ...user,
      _id: enrollment._id,
      enrollmentId: enrollment._id,
      userId: user._id,
    };
  });
};

export const addUserToCourse = (courseId, user) => {
  // First create the user if they don't exist
  let existingUser = Database.users.find((u) => u.email === user.email);
  if (!existingUser) {
    existingUser = {
      ...user,
      _id: new Date().getTime().toString(),
      password: "password123", // Default password
      loginId: `00${new Date().getTime()}S`,
      section: "S101",
      lastActivity: new Date().toISOString().split("T")[0],
      totalActivity: "00:00:00",
    };
    Database.users.push(existingUser);
  }

  // Then create enrollment
  return enrollmentsDao.enrollUserInCourse(existingUser._id, courseId);
};

export const removeUserFromCourse = (courseId, enrollmentId) => {
  const enrollment = Database.enrollments.find((e) => e._id === enrollmentId);
  if (enrollment) {
    return enrollmentsDao.unenrollUserFromCourse(enrollment.user, courseId);
  }
  return { status: "NOT_FOUND" };
};

export const updateUserInCourse = (enrollmentId, updates) => {
  const enrollment = Database.enrollments.find((e) => e._id === enrollmentId);
  if (enrollment) {
    const user = Database.users.find((u) => u._id === enrollment.user);
    if (user) {
      Object.assign(user, updates);
      return user;
    }
  }
  return null;
};
