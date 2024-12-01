// Enum Definitions
// Перелічення для статусів студентів
enum StudentStatus {
    Active = "Active", 
    Academic_Leave = "Academic_Leave", 
    Graduated = "Graduated", 
    Expelled = "Expelled" 
}
// Перелічення для типів курсів
enum CourseType{
    Mandatory = "Mandatory", 
    Optional = "Optional", 
    Special = "Special" 
}
// Перелічення для академічних семестрів
enum Semester {
    First = "First", 
    Second = "Second" 
}
// Перелічення для оцінок з числовими значеннями
enum Grade {
    Excellent = 5, 
    Good = 4, 
    Satisfactory = 3,
    Unsatisfactory = 2 
}
// Перелічення для факультетів університету
enum Faculty {
    Computer_Science = "Computer_Science", 
    Economics = "Economics",
    Law = "Law", 
    Engineering = "Engineering" 
}
// Interface Definitions
// Інтерфейс для об'єкта студента
interface Student {
    id: number; 
    fullName: string; 
    faculty: Faculty; 
    year: number; 
    status: StudentStatus; 
    enrollmentDate: Date; 
    groupNumber: string; 
}
// Інтерфейс для об'єкта курсу
interface Course {
    id: number; 
    name: string; 
    type: CourseType; 
    credits: number; 
    semester: Semester;
    faculty: Faculty; 
    maxStudents: number; 
    enrolledStudents: number; 
}
// Інтерфейс для запису оцінки
interface GradeRecord {
    studentId: number; 
    courseId: number; 
    grade: Grade; 
    date: Date; 
    semester: Semester; 
}
// Class Definition
// Основний клас для управління університетом
class UniversityManagementSystem {
    // Внутрішні масиви для збереження даних
    private students: Student[] = [];
    private courses: Course[] = [];
    private grades: GradeRecord[] = [];
    // Внутрішні лічильники для генерації унікальних ID
    private studentIdCounter = 1;
    private courseIdCounter = 1;
    // Метод для зарахування нового студента
    enrollStudent(student: Omit<Student, "id">): Student {
        // Створення нового студента з унікальним ID
        const newStudent: Student = { id: this.studentIdCounter++, ...student };
        this.students.push(newStudent); 
        return newStudent; 
    }
    // Метод для реєстрації студента на курс
    registerForCourse(studentId: number, courseId: number): void {
        // Знаходимо студента та курс
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);

        // Перевірка, чи існують студент та курс
        if (!student || !course) {
            throw new Error("Студента або курс не знайдено.");
        }

        // Перевірка, чи студент належить до того ж факультету, що й курс
        if (course.faculty !== student.faculty) {
            throw new Error("Студент не може зареєструватися на курс іншого факультету.");
        }

        // Перевірка, чи є вільні місця на курсі
        if (course.enrolledStudents >= course.maxStudents) {
            throw new Error("Курс заповнений.");
        }

        // Збільшуємо кількість зареєстрованих студентів на курсі
        course.enrolledStudents++;
    }
    // Метод для виставлення оцінки студенту на курсі
    setGrade(studentId: number, courseId: number, grade: Grade): void {
        // Знаходимо студента та курс
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);

        // Перевірка, чи існують студент та курс
        if (!student || !course) {
            throw new Error("Студента або курс не знайдено.");
        }
        // Додаємо запис оцінки в систему
        this.grades.push({
            studentId,
            courseId,
            grade,
            date: new Date(),
            semester: course.semester
        });
    }
    // Метод для оновлення статусу студента
    updateStudentStatus(studentId: number, newStatus: StudentStatus): void {
        // Знаходимо студента
        const student = this.students.find(s => s.id === studentId);
        if (!student) {
            throw new Error("Студента не знайдено.");
        }

        // Перевірка, чи дозволено встановлювати новий статус
        if (newStatus === StudentStatus.Graduated && student.year < 4) {
            throw new Error("Не можна випускати студента до завершення останнього року навчання.");
        }
        // Оновлюємо статус студента
        student.status = newStatus;
    }
    // Метод для отримання студентів за факультетом
    getStudentsByFaculty(faculty: Faculty): Student[] {
        return this.students.filter(s => s.faculty === faculty);
    }
    // Метод для отримання всіх оцінок студента
    getStudentGrades(studentId: number): GradeRecord[] {
        return this.grades.filter(g => g.studentId === studentId);
    }
    // Метод для отримання доступних курсів за факультетом і семестром
    getAvailableCourses(faculty: Faculty, semester: Semester): Course[] {
        return this.courses.filter(
            c => c.faculty === faculty && c.semester === semester && c.enrolledStudents < c.maxStudents
        );
    }
    // Метод для обчислення середнього балу студента
    calculateAverageGrade(studentId: number): number {
        const studentGrades = this.grades.filter(g => g.studentId === studentId);
        if (studentGrades.length === 0) {
            return 0; // Повертаємо 0, якщо оцінки відсутні
        }

        // Обчислюємо середнє значення оцінок
        const total = studentGrades.reduce((sum, g) => sum + g.grade, 0);
        return total / studentGrades.length;
    }
    // Метод для отримання відмінників за факультетом
    getTopStudentsByFaculty(faculty: Faculty): Student[] {
        const studentsInFaculty = this.getStudentsByFaculty(faculty);
        return studentsInFaculty.filter(student => {
            const avgGrade = this.calculateAverageGrade(student.id);
            return avgGrade >= Grade.Excellent - 1; // Студенти з середнім балом 5 або дуже близьким до нього
        });
    }
}
