import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user = request.body;

      const newUser = this.createUserUseCase.execute(user);

      return response.status(201).json(newUser);
    } catch (error) {
      return response.status(400).json({ error: "User Already exist" });
    }
  }
}

export { CreateUserController };
