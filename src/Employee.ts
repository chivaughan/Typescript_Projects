class Employee extends Person {
    constructor(firstName: string, lastName: string, public salary: number) {
        super(firstName, lastName);
    }
}