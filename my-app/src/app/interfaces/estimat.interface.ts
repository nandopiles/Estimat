export interface ICardInfo {
    title: string;
    text: string;
    img: string;
}

export interface User {
    idUser: number;
    name: string;
    password: string;
    email: string;
    status: string;
    role: string;
}

export interface Favs {
    user: User;
    new: INews;
    users: string;
    date: Date;
}

export interface INews {
    id: number;
    title: string;
    description: string;
    image: string;
}
