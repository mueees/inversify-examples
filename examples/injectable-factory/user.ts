import {inject, injectable} from "inversify";
import {ILogger, IUser} from "./interfaces";
import {TYPES} from "./types";

@injectable()
export class User implements IUser {
    @inject(TYPES.Logger) private logger: ILogger;

    name: string;
}