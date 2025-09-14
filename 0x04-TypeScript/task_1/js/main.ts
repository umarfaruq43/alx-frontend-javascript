// Define the Teacher interface with required and optional properties
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Index signature to allow additional properties
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}
