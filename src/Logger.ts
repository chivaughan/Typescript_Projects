class Logger {
    constructor(public fileName: string) {

    }

    WriteMessage(message: string): void {
        console.log("The string " + message + " was written to the file");
    }
}