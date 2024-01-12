import { NextFunction, Request, Response } from "express";
import UserService from "../../service/user.service";
import Password from "../../helpers/password";
import jwt from "jsonwebtoken";
import {
  JWT_SECRET,
  tokenExpirationInSeconds,
} from "../../constants/global_constants";
import logger from "../../loggers/logger.winston";
import { generateToken, verifyToken } from "../../helpers/tokenGenerator";
import { UserInterface } from "../../models/user.model";

const userService = new UserService();

export type Role = 'ADMIN' | 'USER' | 'HR' | 'SALES' | 'DEV';

/**
 * @interface User Details to be passed while Token Generation
 */
interface UserDetails {
  id: string;
  username:string;
  role: Role;
}
/**
 * @description Responsible for authentication
 */
export class AuthController {
  /**
   * @description User Sign Up
   */
  public async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const hashed = await Password.toHash(password);
      const user = await userService.findUserByUsername(username);
      // Already the User Exist
      if (user) {
        return res.status(403).json({ message: "Already the user exist" });
      }

      // Initial Role

      const role:Role="USER";
      // Storing the User in database
      const newUser = await userService.registerUser({
        username,
        password:hashed,
        role,
      } as UserInterface);

      // Jwt Token Generation
      const token = generateToken(newUser);
      return res.status(200).json({
        message: "Successfully Inserted the User",
        user_details: { id: newUser.id, username: newUser.username, role } as unknown as UserDetails,
        auth_token:token,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   *@description login method
   * @param req
   * @param res
   * @param next
   * @returns
   */
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const user = await userService.findUserByUsername(username);
      // If the user is found
      if (user) {
        const isPasswordMatch = await Password.compare(user.password, password);
        if (isPasswordMatch) {
          const token = generateToken(user);
          return res.status(200).json({
            message: "Successfully Logged In",
            user_details: { id: user.id, username: user.username, role:user.role as Role } as UserInterface,
            auth_token:token,
          });
        } else {
          return res.status(401).json({ 
          message: "Incorrect Password",
          user_details: null,
          auth_token: null,
        });
        }
      }else{
        return res.status(401).json({ 
          message: "Username not found",
          user_details: null,
          auth_token: null,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}
