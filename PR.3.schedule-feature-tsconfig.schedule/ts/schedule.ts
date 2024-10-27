
export type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

export type TimeSlot = 
    "8:30-10:00" | 
    "10:15-11:45" | 
    "12:15-13:45" | 
    "14:00-15:30" | 
    "15:45-17:15";


export type CourseType = "Lecture" | "Seminar" | "Lab" | "Practice";


export type Professor = {
    id: number;
    name: string;
    department: string;
};


export type Classroom = {
    number: string;
    capacity: number;
    hasProjector: boolean;
};

export type Course = {
    id: number;
    name: string;
    type: CourseType;
};


export type Lesson = {
    courseId: number;
    professorId: number;
    classroomNumber: string;
    dayOfWeek: DayOfWeek;
    timeSlot: TimeSlot;
};


export const professors: Professor[] = [];
export const classrooms: Classroom[] = [];
export const courses: Course[] = [];
export const schedule: Lesson[] = [];


export function addProfessor(professor: Professor): void {
    professors.push(professor);
}

export function addLesson(lesson: Lesson): boolean {
    const conflict = validateLesson(lesson);
    if (!conflict) {
        schedule.push(lesson);
        return true;
    }
    return false;
}


export function findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[] {
    const occupiedClassrooms = schedule
        .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
        .map(lesson => lesson.classroomNumber);

    return classrooms
        .filter(classroom => !occupiedClassrooms.includes(classroom.number))
        .map(classroom => classroom.number);
}

export function getProfessorSchedule(professorId: number): Lesson[] {
    return schedule.filter(lesson => lesson.professorId === professorId);
}

export type ScheduleConflict = {
    type: "ProfessorConflict" | "ClassroomConflict";
    lessonDetails: Lesson;
};

export function validateLesson(lesson: Lesson): ScheduleConflict | null {
   
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

export function getClassroomUtilization(classroomNumber: string): number {
    const totalLessons = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
    const totalTimeSlots = 5 * 5; 
    return (totalLessons / totalTimeSlots) * 100;
}

export function getMostPopularCourseType(): CourseType {
    const courseTypeCounts: { [key in CourseType]?: number } = {};
    
    courses.forEach(course => {
        courseTypeCounts[course.type] = (courseTypeCounts[course.type] || 0) + 1;
    });

    return Object.keys(courseTypeCounts).reduce((a, b) =>
        courseTypeCounts[a as CourseType]! > courseTypeCounts[b as CourseType]! ? a : b
    ) as CourseType;
}

export function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
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

export function cancelLesson(lessonId: number): void {
    schedule = schedule.filter(lesson => lesson.courseId !== lessonId);
}
