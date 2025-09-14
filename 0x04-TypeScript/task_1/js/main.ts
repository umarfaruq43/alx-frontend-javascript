// Interface for the constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Interface for the class methods
interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentInterface {
    private firstName: string;
    private lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
