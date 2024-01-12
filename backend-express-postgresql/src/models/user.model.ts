import {
  AutoIncrement,
  Column,
  DataType,
  DefaultScope,
  Model,
  PrimaryKey,
  Scopes,
  Table,
  Unique,
} from "sequelize-typescript";

export interface UserInterface {
  id?: number;
  username: string;
  password: string;
  role:string;
}
/**
 * @description The is the User Details without the password
 */
@DefaultScope(() => ({
  attributes: ["id", "username", "password", "role"],
}))
@Scopes(() => ({
  withoutPassword: {
    attributes: {
      exclude: ["password"],
    },
  },
}))
@Table({ timestamps: true, tableName: "user_master" })
export default class User extends Model<UserInterface> {
  @AutoIncrement
  @Unique
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  id!: number;

  @Column({ type: DataType.STRING(256), allowNull: false, unique: true })
  username!: string;

  @Column({ type: DataType.STRING(256), allowNull: false, unique: false })
  password!: string;

  @Column({ type: DataType.STRING(256), allowNull: false, unique: false })
  role!: string;
}
