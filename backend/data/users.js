import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const users = [
  {
    name: "Admin User",
    email: process.env.ADMIN_EMAIL,
    password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: process.env.JOHN_EMAIL,
    password: bcrypt.hashSync(process.env.JOHN_PASSWORD, 10),
    isAdmin: false,
  },
  {
    name: "Max",
    email: process.env.MAX_EMAIL,
    password: bcrypt.hashSync(process.env.MAX_PASSWORD, 10),
    isAdmin: false,
  },
];

export default users;
