export class Book {
  _id: number = 0;
  title: string = '';
  auther: string = '';
  publisher: string = '';
  publishingDate: string = '';
  category: string = '';
  edition: number = 0;
  pages: number = 0;
  avilable: number = 0;
  shelfNo: number = 0;
  numOfCopies: number = 0;
  image: string = '';
  noOfBorrowing: number = 0;
  noOfReading: number = 0;
  createdAt: string = '';
}

export interface BookRequest {
  _id?: number;
  title?: string;
  auther?: string;
  publisher?: string;
  publishingDate?: string;
  category?: string;
  edition?: number;
  pages?: number;
  avilable?: number;
  shelfNo?: number;
  numOfCopies?: number;
  image?: string;
  noOfBorrowing?: number;
  noOfReading?: number;
  createdAt?: Date;
}
