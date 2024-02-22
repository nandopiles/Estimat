export interface ICardInfo {
    title: string;
    text: string;
    img: string;
}

export interface User{
    idUser: number;
    name: string;
    password: string;
    email: string;
    status: string;
    role: string;
}

export interface Favs{
    user: User;
    new: News;
    users: string;
    date: Date;
}

export interface News{
    idNews: number;
    title: string;
    description: string;
    photo: string;
}