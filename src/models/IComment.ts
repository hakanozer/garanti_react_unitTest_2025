export interface IComment {
    meta: Meta;
    data: Data;
}

export interface Data {
    id:      number;
    post_id: number;
    name:    string;
    email:   string;
    body:    string;
}

export interface Meta {
    status:  number;
    message: string;
}
