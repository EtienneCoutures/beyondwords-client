enum MediaType {
    pdf = 'pdf',
    video = 'video',
    txt = 'txt'
}

export class Content {
    id: number;
    index: number; //index d'apparition
    label: string;
    url: string;
    type: MediaType;
}
