
const DayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TimeSlot = [
    "8:30-10:00",
    "10:15-11:45",
    "12:15-13:45",
    "14:00-15:30",
    "15:45-17:15"
];
const CourseType = ["Lecture", "Seminar", "Lab", "Practice"];


const professors = [];
const classrooms = [];
const courses = [];
let schedule = [];


function addProfessor(professor) {
    professors.push(professor);
}


function addLesson(lesson) {
    const conflict = validateLesson(lesson);
    if (!conflict) {
        schedule.push(lesson);
        return true;
    }
    return false;
}


function findAvailableClassrooms(timeSlot, dayOfWeek) {
    const occupiedClassrooms = schedule
        .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
        .map(lesson => lesson.classroomNumber);

    return classrooms
        .filter(classroom => !occupiedClassrooms.includes(classroom.number))
        .map(classroom => classroom.number);
}

function getProfessorSchedule(professorId) {
    return schedule.filter(lesson => lesson.professorId === professorId);
}


function validateLesson(lesson) {
    const professorConflict = schedule.find(
        l => l.professorId === lesson.professorId &&
             l.dayOfWeek === lesson.dayOfWeek &&
             l.timeSlot === lesson.timeSlot
    );

    if (professorConflict) {
        return { type: "ProfessorConflict", lessonDetails: professorConflict };
    }

    const classroomConflict = schedule.find(
        l => l.classroomNumber === lesson.classroomNumber &&
             l.dayOfWeek === lesson.dayOfWeek &&
             l.timeSlot === lesson.timeSlot
    );

    if (classroomConflict) {
        return { type: "ClassroomConflict", lessonDetails: classroomConflict };
    }

    return null;
}


function getClassroomUtilization(classroomNumber) {
    const totalLessons = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
    const totalTimeSlots = 5 * 5; 
    return (totalLessons / totalTimeSlots) * 100;
}

function getMostPopularCourseType() {
    const courseTypeCounts = {};

    courses.forEach(course => {
        courseTypeCounts[course.type] = (courseTypeCounts[course.type] || 0) + 1;
    });

    return Object.keys(courseTypeCounts).reduce((a, b) =>
        courseTypeCounts[a] > courseTypeCounts[b] ? a : b
    );
}


function reassignClassroom(lessonId, newClassroomNumber) {
    const lesson = schedule.find(lesson => lesson.courseId === lessonId);
    
    if (lesson) {
        const conflict = validateLesson({ ...lesson, classroomNumber: newClassroomNumber });
        if (!conflict) {
            lesson.classroomNumber = newClassroomNumber;
            return true;
        }
    }
    return false;
}


function cancelLesson(lessonId) {
    schedule = schedule.filter(lesson => lesson.courseId !== lessonId);
}
