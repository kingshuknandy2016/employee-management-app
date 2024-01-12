import logger from "../loggers/logger.winston";
import User, { UserInterface } from "../models/user.model";

export default class UserService {
  public async getUsers() {
    const users: User[] = await User.scope("withoutPassword").findAll();
    return users;
  }

  public async setUser(userInput: UserInterface) {
    const c = new User(userInput);
    return await c.save();
  }

  public async registerUser(userInput: UserInterface) {
    const user: User = new User(userInput);
    return await user.save();
  }

  /**
   * @description Should be used only by the login method and it contains password data
   */
  public async findUserByUsername(username: string): Promise<User | null> {
    return await User.findOne({
      where: {
        username: username,
      },
    });
  }

  public async findUserByUsernameWithoutPassword(
    username: string,
  ): Promise<User | null> {
    return await User.scope("withoutPassword").findOne({
      where: {
        username: username,
      },
    });
  }
}
