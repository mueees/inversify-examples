import "reflect-metadata";
import {container} from "./container";
import {IUserFactoryService} from "./interfaces";
import {TYPES} from "./types";

let userFactoryService = container.get<IUserFactoryService>(TYPES.UserFactory);

let user1 = userFactoryService.create('foo');
let user2 = userFactoryService.create('boo');

console.log(user1);
console.log(user2);