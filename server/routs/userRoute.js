import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { login, loginUser, register } from "../controlers/userController.js";

const userRout = express.Router();
userRout.route("/register").post(register);
userRout.route("/login").post(login);
userRout.route("/").get(isAuthenticated, loginUser);

export default userRout;

