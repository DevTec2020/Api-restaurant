import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";

class ProductController {
    async index(request: Request, respose: Response, next: NextFunction) {
        try {
          return respose.json({ message: "ok"})
        } catch (error) {
            next(error)
        }
    }
}

export {ProductController}