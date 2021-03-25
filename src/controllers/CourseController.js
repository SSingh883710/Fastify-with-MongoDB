const Course = require("../models/Course");

// Get all course
exports.getCourse = async(req, rep) => {
    try {
        const courses = await Course.find();
        return courses;
    } catch (err) {
        throw err;
    }
};

// Get single cours details
exports.getSingleCourse = async(req, rep) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);
        return course;
    } catch (err) {
        throw err;
    }
};

// Add a new course
exports.addCourse = async(req, rep) => {
    try {
        const course = new Course(req.body);
        return course.save();
    } catch (err) {
        throw err;
    }
};

// Update a course
exports.updateCourse = async(req, reply) => {
    try {
        const courseId = req.params.id;
        const course = req.body;
        const {...updatedCourse } = course;
        const update = await Course.findByIdAndUpdate(courseId, updatedCourse, { new: true });
        return update;
    } catch (err) {
        throw err;
    }
}

// Delete a course
exports.deleteCourse = async(req, reply) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findByIdAndDelete(courseId);
        return course;
    } catch (err) {
        throw err;
    }
}