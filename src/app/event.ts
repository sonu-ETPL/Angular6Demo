export class Event {
    public name: string;
    public type: string;
    public details: string;
    public imagePath: string;
    public dateOfEvent: Date;
    constructor(name: string, type: string, details: string, imagePath: string, dateOfEvent: Date) {
        this.name = name;
        this.type = type;
        this.details = details;
        this.imagePath = imagePath;
        this.dateOfEvent = dateOfEvent;
    }
}
