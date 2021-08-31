import { Categorie } from "./categorie.model";

export class User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    Categories: Array<Categorie>;
    createdAt?: Date;
    updatedAt?: Date;
}
