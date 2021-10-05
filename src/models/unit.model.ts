import { UnitContent } from "./unit-content.model";

export class Unit {
    id: number;
    index: number;
    img: string; 
    title: string;
    label: string;
    finished: boolean;
    courses?: Array<UnitContent>;
    createdAt?: Date;
    updatedAt?: Date;
}
