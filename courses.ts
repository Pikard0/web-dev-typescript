interface Course {
    name: string;
    duration: number;
    studentsCount: number;
}

class OnlineCourse implements Course {
    constructor(
        public name: string,
        public duration: number,
        public studentsCount: number,
        public platform: string
    ) {}
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс "${course.name}" успішно додано.`);
    }

    removeCourse(courseName: string): void {
        const initialLength = this.courses.length;
        this.courses = this.courses.filter(course => course.name !== courseName);

        if (this.courses.length < initialLength) {
            console.log(`Курс "${courseName}" видалено.`);
        } else {
            console.log(`Курс "${courseName}" не знайдено.`);
        }
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.name === courseName);
    }

    getTotalDuration(): number {
        return this.courses.reduce((sum, course) => sum + course.duration, 0);
    }

    listCourses(): void {
        console.log("Список курсів:");
        this.courses.forEach(course => {
            console.log(`- ${course.name} (${course.duration} год., ${course.studentsCount} студентів)`);
        });
    }
}

const manager = new CourseManager();

const tsCourse = new OnlineCourse("TypeScript Basics", 40, 25, "Udemy");
const jsCourse = new OnlineCourse("JavaScript Advanced", 60, 40, "Coursera");
const reactCourse = new OnlineCourse("React & Redux", 50, 30, "Pluralsight");

manager.addCourse(tsCourse);
manager.addCourse(jsCourse);
manager.addCourse(reactCourse);

manager.listCourses();

console.log(`Загальна тривалість усіх курсів: ${manager.getTotalDuration()} год.`);

const found = manager.findCourse("TypeScript Basics");
if (found) {
    console.log(`Знайдено курс: ${found.name}`);
}

manager.removeCourse("JavaScript Advanced");
manager.listCourses();