export class User {
    public sapId: number;
    public name: string;
    public dob: Date;
    public about: string;
    public userImage: string;
    public hobby: string;
    // public mobileNo: number;
    // public emailId: string;

    constructor(sapId: number, name: string,  dob: Date,  about: string, userImage: string, hobby: string) {
        this.sapId = sapId;
        this.name = name;
        this.dob = dob;
        this.about = about;
        this.userImage = userImage;
        this.hobby = hobby;
       // this.mobileNo = mobileNo;
       // this.emailId = emailId;
    }
}
