import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.headers.user_id as string;

      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    } catch (error) {
      console.log(error);
      return response
        .status(401)
        .json({ error: "User doesn't have enough privileges" });
    }
  }
}

export { ListAllUsersController };
