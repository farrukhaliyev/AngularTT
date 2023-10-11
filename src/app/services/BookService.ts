import { Injectable } from "@angular/core";

//Classes that marked with this decorator are Service classes
@Injectable()

export class BookService
{
    getBooks(): Book[]
    {
        return [
            { name: `Dunya`, page: 120 },
            { name: `Saturn`, page: 240 },
            { name: `Yupiter`, page: 360 },
        ]
    }
}

export class Book
{
    name: string;
    page: number;
}