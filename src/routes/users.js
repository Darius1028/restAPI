import { Router } from "express"
import * as UserController from './../controller/users.controllers.js'

const userRoutes = Router();

userRoutes.get("/", UserController.findAllUsers);
userRoutes.post("/", UserController.createUser);
userRoutes.get("/filter", UserController.filterUsers);
userRoutes.get("/:id", UserController.findOneUser);
userRoutes.delete("/:id", UserController.deleteUser);
userRoutes.put("/:id", UserController.updateUser);

export default userRoutes;