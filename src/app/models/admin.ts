export class Admin {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: Date;
  hiredate: Date;
  salary: number;
  email: string;
  basic: boolean;
  password: string;
  image: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    birthdate: Date,
    hiredate: Date,
    salary: number,
    email: string,
    basic: boolean,
    password: string,
    image: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.hiredate = hiredate;
    this.salary = salary;
    this.email = email;
    this.basic = basic;
    this.password = password;
    this.image = image;
  }
}

export interface AdminRequest {
  firstName?: string;
  lastName?: string;
  birthdate?: Date;
  hiredate?: Date;
  salary?: number;
  email?: string;
  basic?: boolean;
  password?: string;
  image?: string;
}
