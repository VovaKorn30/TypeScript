import { 
    DayOfWeek, TimeSlot, CourseType, Professor, Classroom, Course, Lesson, 
    addProfessor, addLesson, findAvailableClassrooms, getProfessorSchedule, validateLesson,
    getClassroomUtilization, getMostPopularCourseType, reassignClassroom, cancelLesson, 
    professors, classrooms, courses, schedule 
} from './schedule';


beforeEach(() => {
    professors.length = 0;
    classrooms.length = 0;
    courses.length = 0;
    schedule.length = 0;
});

test('should add a professor to the professors array', () => {
    const professor: Professor = { id: 1, name: 'John Doe', department: 'Math' };
    addProfessor(professor);

    expect(professors).toContain(professor);
});


test('should add a lesson to the schedule if no conflict', () => {
    const course: Course = { id: 1, name: 'Math 101', type: "Lecture" };
    const professor: Professor = { id: 1, name: 'John Doe', department: 'Math' };
    const classroom: Classroom = { number: '101', capacity: 30, hasProjector: true };

    courses.push(course);
    professors.push(professor);
    classrooms.push(classroom);

    const lesson: Lesson = {
        courseId: 1,
        professorId: 1,
        classroomNumber: '101',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    const result = addLesson(lesson);

    expect(result).toBe(true);
    expect(schedule).toContain(lesson);
});

test('should not add a lesson if there is a conflict', () => {
    const course: Course = { id: 1, name: 'Math 101', type: "Lecture" };
    const professor: Professor = { id: 1, name: 'John Doe', department: 'Math' };
    const classroom: Classroom = { number: '101', capacity: 30, hasProjector: true };

    courses.push(course);
    professors.push(professor);
    classrooms.push(classroom);

    const lesson1: Lesson = {
        courseId: 1,
        professorId: 1,
        classroomNumber: '101',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    const lesson2: Lesson = {
        courseId: 2,
        professorId: 1,
        classroomNumber: '101',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    addLesson(lesson1);
    const result = addLesson(lesson2);

    expect(result).toBe(false);
    expect(schedule).toContain(lesson1);
    expect(schedule).not.toContain(lesson2);
});


test('should return available classrooms for a given time slot and day of week', () => {
    const classroom1: Classroom = { number: '101', capacity: 30, hasProjector: true };
    const classroom2: Classroom = { number: '102', capacity: 30, hasProjector: true };
    classrooms.push(classroom1, classroom2);

    const lesson: Lesson = {
        courseId: 1,
        professorId: 1,
        classroomNumber: '101',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    addLesson(lesson);

    const availableClassrooms = findAvailableClassrooms('8:30-10:00', 'Monday');

    expect(availableClassrooms).toContain('102');
    expect(availableClassrooms).not.toContain('101');
});


test('should return the schedule of a specific professor', () => {
    const professor: Professor = { id: 1, name: 'John Doe', department: 'Math' };
    const lesson: Lesson = {
        courseId: 1,
        professorId: 1,
        classroomNumber: '101',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    professors.push(professor);
    addLesson(lesson);

    const schedule = getProfessorSchedule(1);

    expect(schedule).toContain(lesson);
});


test('should return a conflict if professor or classroom is already occupied', () => {
    const lesson1: Lesson = {
        courseId: 1,
        professorId: 1,
        classroomNumber: '101',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    const lesson2: Lesson = {
        courseId: 2,
        professorId: 1,
        classroomNumber: '102',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    addLesson(lesson1);

    const conflict = validateLesson(lesson2);

    expect(conflict).toEqual({
        type: "ProfessorConflict",
        lessonDetails: lesson1
    });
});


test('should calculate classroom utilization correctly', () => {
    const lesson: Lesson = {
        courseId: 1,
        professorId: 1,
        classroomNumber: '101',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    addLesson(lesson);

    const utilization = getClassroomUtilization('101');

    expect(utilization).toBeCloseTo(4, 1); // 1 з 25 слотів = 4%
});


test('should return the most popular course type', () => {
    const course1: Course = { id: 1, name: 'Math 101', type: 'Lecture' };
    const course2: Course = { id: 2, name: 'Physics 101', type: 'Lab' };
    const course3: Course = { id: 3, name: 'Chemistry 101', type: 'Lecture' };

    courses.push(course1, course2, course3);

    const mostPopularCourseType = getMostPopularCourseType();

    expect(mostPopularCourseType).toBe('Lecture');
});


test('should reassign classroom if no conflict', () => {
    const lesson: Lesson = {
        courseId: 1,
        professorId: 1,
        classroomNumber: '101',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    addLesson(lesson);

    const result = reassignClassroom(1, '102');

    expect(result).toBe(true);
    expect(schedule.find(l => l.courseId === 1)?.classroomNumber).toBe('102');
});

test('should remove a lesson from the schedule', () => {
    const lesson: Lesson = {
        courseId: 1,
        professorId: 1,
        classroomNumber: '101',
        dayOfWeek: 'Monday',
        timeSlot: '8:30-10:00'
    };

    addLesson(lesson);
    cancelLesson(1);

    expect(schedule).not.toContain(lesson);
});
