import "reflect-metadata";
import {Container} from "inversify";
import {Logger} from "./logger";
import {User} from "./user";
import {UserFactory} from "./user.factory";
import {ILogger, IUser, IUserFactoryService} from "./interfaces";
import {TYPES} from "./types";

let container = new Container();

container.bind<ILogger>(TYPES.Logger).to(Logger);
container.bind<IUser>(TYPES.User).to(User);
container.bind<IUserFactoryService>(TYPES.UserFactory).to(UserFactory);

export {container};