export class OpenClose implements Error {
    name: string;
    message: string;
    code: string;

    constructor(message: string, type?: string) {
        this.message = message;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, OpenClose);
    }
}