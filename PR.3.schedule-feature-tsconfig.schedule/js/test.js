

const {
    addProfessor,
    addLesson,
    findAvailableClassrooms,
    getProfessorSchedule,
    validateLesson,
    getClassroomUtilization,
    getMostPopularCourseType,
    reassignClassroom,
    cancelLesson,
    professors,
    classrooms,
    courses,
    schedule
} = require('./schedule'); 

beforeEach(() => {
  
    professors.length = 0;
    classrooms.length = 0;
    courses.length = 0;
    schedule.length = 0;

   
    classrooms.push({ number: "101", capacity: 30, hasProjector: true });
    classrooms.push({ number: "102", capacity: 25, hasProjector: false });

    courses.push({ id: 1, name: "Math", type: "Lecture" });
    courses.push({ id: 2, name: "Physics", type: "Lab" });

    professors.push({ id: 1, name: "Dr. Smith", department: "Math" });
});


test('addProfessor should add a professor to the list', () => {
    const professor = { id: 2, name: "Dr. Brown", department: "Physics" };
    addProfessor(professor);
    expect(professors).toContainEqual(professor);
});


test('addLesson should add a lesson if no conflicts', () => {
    const lesson = { courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    const result = addLesson(lesson);
    expect(result).toBe(true);
    expect(schedule).toContainEqual(lesson);
});


test('addLesson should not add a lesson if conflicts', () => {
    const lesson1 = { courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    const lesson2 = { courseId: 2, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    addLesson(lesson1);
    const result = addLesson(lesson2);
    expect(result).toBe(false);
});


test('findAvailableClassrooms should return available classrooms', () => {
    const lesson = { courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    addLesson(lesson);
    const available = findAvailableClassrooms("8:30-10:00", "Monday");
    expect(available).toEqual(["102"]); 
});


test('getProfessorSchedule should return the schedule for a specific professor', () => {
    const lesson = { courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    addLesson(lesson);
    const schedule = getProfessorSchedule(1);
    expect(schedule).toContainEqual(lesson);
});


test('validateLesson should detect professor conflict', () => {
    const lesson1 = { courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    const lesson2 = { courseId: 2, professorId: 1, classroomNumber: "102", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    addLesson(lesson1);
    const conflict = validateLesson(lesson2);
    expect(conflict).toEqual({ type: "ProfessorConflict", lessonDetails: lesson1 });
});


test('getClassroomUtilization should calculate utilization percentage', () => {
    const lesson1 = { courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    addLesson(lesson1);
    const utilization = getClassroomUtilization("101");
    expect(utilization).toBe((1 / 25) * 100); 
});


test('getMostPopularCourseType should return the most popular course type', () => {
    const course1 = { id: 1, name: "Math", type: "Lecture" };
    const course2 = { id: 2, name: "Physics", type: "Lab" };
    const course3 = { id: 3, name: "Chemistry", type: "Lecture" };
    courses.push(course1, course2, course3);
    const popularType = getMostPopularCourseType();
    expect(popularType).toBe("Lecture"); 
});


test('reassignClassroom should change the classroom of a lesson if no conflict', () => {
    const lesson = { courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    addLesson(lesson);
    const result = reassignClassroom(1, "102");
    expect(result).toBe(true);
    expect(schedule[0].classroomNumber).toBe("102");
});


test('cancelLesson should remove the lesson from the schedule', () => {
    const lesson = { courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
    addLesson(lesson);
    cancelLesson(1);
    expect(schedule).not.toContainEqual(lesson);
});
