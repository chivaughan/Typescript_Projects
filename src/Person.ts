class Person {

    constructor(public firstName: string, public lastName: string) { }

    get FullName(): string {
        return this.firstName + " " + this.lastName;
    }
}