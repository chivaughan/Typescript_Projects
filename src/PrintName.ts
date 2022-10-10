function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}