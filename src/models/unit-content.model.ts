enum MediaType {
    pdf = "pdf",
    video = "video"
}

export class UnitContent {
    id: number;
    index: number; //index d'apparition
    label: string;
    img: string;
    url: string;
    type: MediaType;
    unitId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
