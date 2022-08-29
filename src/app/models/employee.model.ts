import { Manager } from "./manager.model";

export class Employee {
    id_employee: number;
    code: number;
    cos_center: number;
    email: string;
    manager: Manager;
    name: string;
    nr_of_phone: number;
    password: string;
}
