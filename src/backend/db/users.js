import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Anuj",
    lastName: "Kumar",
    email: "anujk8499@gmail.com",
    password: "Anuj#123",
    address: [
      {
        _id: uuid(),
        name: "Anuj kumar",
        zipCode: "825311",
        street: "Road no 1 , Ashok nagar , kankarbagh",
        city: "Hzaribagh",
        district: "Hazaribagh",
        state: "Jharkhand",
        country: "India",
        phoneNumber: "7779843621",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
