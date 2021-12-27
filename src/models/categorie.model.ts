import { Unit } from "./unit.model";

export class Categorie {
    id: number;
    index: number;
    title: string;
    img: string;
    progression: number;
    label: string;
    eval_intro: string;
    eval_mid: string;
    TagId: number;
    Units: Unit[];
    createdAt?: Date;
    updatedAt?: Date;

    constructor(id: number, index: number, title: string, img: string, progression: number, label: string, eval_intro: string, eval_mid: string, TagId: number, units: Unit[], createdAt?: Date, updatedAt?: Date) {
        this.id = id;
        this.index = index;
        this.title = title;
        this.img = img;
        this.progression = progression;
        this.label = label; 
        this.eval_intro = eval_intro;
        this.eval_mid = eval_mid;
        this.TagId = TagId;
        this.Units = units; 
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
