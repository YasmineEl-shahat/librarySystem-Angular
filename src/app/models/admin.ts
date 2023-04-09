export class Admin {
  id: number;
  fname: string;
  lname: string;
  birthdate: Date;
  hiredate: Date;
  salary: number;
  email: string;
  isBase: boolean;
  password: string;
  image: string;

  constructor(
    id: number,
    fname: string,
    lname: string,
    birthdate: Date,
    hiredate: Date,
    salary: number,
    email: string,
    isBase: boolean,
    password: string,
    image: string
  ) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.birthdate = birthdate;
    this.hiredate = hiredate;
    this.salary = salary;
    this.email = email;
    this.isBase = isBase;
    this.password = password;
    this.image = image;
  }
}

export interface AdminRequest {
  fname?: string;
  lname?: string;
  birthdate?: Date;
  hiredate?: Date;
  salary?: number;
  email?: string;
  isBase?: boolean;
  password?: string;
  image?: string;
}
