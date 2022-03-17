
export class Student{
    constructor(sid: number, sname: string, department: string, city: string){
        this.sid = sid;
        this.sname=sname;
        this.department = department;
        this.city = city;
    }
    sid:number;
    sname:string;
    department:string;
    city:string;
}