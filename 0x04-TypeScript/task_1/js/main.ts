function printTeacher({
    firstName,
    lastName,
}: {
    firstName: string;
    lastName: string;
}): string {
    return `${firstName}. ${lastName}`;
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
interface Director extends Teacher {
    numberOfReports: number;
}

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Index signature to allow additional properties
}
