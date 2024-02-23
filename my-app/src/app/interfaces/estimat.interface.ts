export interface ICardInfo {
    title: string;
    text: string;
    img: string;
}

export interface IUser {
    id: number;
    name: string;
    password: string;
    email: string;
    status: boolean;
    role: boolean;
}

export interface Favs {
    user: IUser;
    new: INew;
    users: string;
    date: Date;
}

export interface INew {
    id: number;
    title: string;
    description: string;
    image: string;
}
