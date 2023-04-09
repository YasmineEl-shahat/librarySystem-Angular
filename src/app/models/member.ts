export class Member {
  _id: Number | undefined;
  fullName: String;
  email: String;
  password: String;
  phoneNumber: String;
  birthdate: Date;
  fullAddress: Object;
  city: String;
  street: String;
  building: String;
  image: String;
  blockedDate: Date;
  created_at: Date;
  updated_at: Date;
  constructor(
    _id: Number,
    fullName: String,
    email: String,
    password: String,
    phoneNumber: String,
    birthdate: Date,
    fullAddress: Object,
    city: String,
    street: String,
    building: String,
    image: String,
    blockedDate: Date,
    created_at: Date,
    updated_at: Date
  ) {
    this._id = _id;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.birthdate = birthdate;
    this.fullAddress = fullAddress;
    this.city = city;
    this.street = street;
    this.building = building;
    this.image = image;
    this.blockedDate = blockedDate;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
export interface MemberRequest {
  _id?: Number;
  fullName?: String;
  email?: String;
  password?: String;
  phoneNumber?: String;
  birthdate?: Date;
  fullAddress?: {
    type?: Object;
    city?: String;
    street?: String;
    building?: String;
  };
  image?: String;
  blockedDate?: Date;
  created_at?: Date;
  updated_at?: Date;
}
