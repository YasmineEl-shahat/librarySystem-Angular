
export class Member {



  _id?: number;
  fullName?: string;
  email?: string;
  password?: string;
  phoneNumber?: string="";
  birthdate?: string;
  fullAddress?: {
    city?: string;
    street?: string;
    building?: string;
  };
  image: string="";
  readingBooks?: string[];
  borrowedBooks?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  getFullAddress(): string {
    return `${this.fullAddress?.city} , ${this.fullAddress?.street}, ${this.fullAddress?.building}`;
  }
}




// import { Validators } from '@angular/forms';

// export class Member {
//   _id: number = 0;

//   fullName: string = '';
//   email: string = '';
//   password: string = '';
//   phoneNumber: string = '';

//   @Validators.required
//   @Validators.pattern(/^[A-Za-z]+(?:[ _-][A-Za-z]+)*$/)
//   fullName: string = '';

//   @Validators.required
//   @Validators.email
//   email: string = '';

//   @Validators.required
//   @Validators.minLength(8)
//   password: string = '';

//   @Validators.required
//   @Validators.pattern(/^01[0-2]\d{8}$/)
//   phoneNumber: string = '';

//   fullAddress?: {
//     city?: string;
//     street?: string;
//     building?: string;
//   };

//   image: string = '';
// }
