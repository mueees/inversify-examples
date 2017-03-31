import "reflect-metadata";
import {Container, inject, injectable} from "inversify";

let container = new Container();

@injectable()
class Logger {
    log(message) {
        console.log(message);
    }
}

class User {
    name: string;
    logger: Logger;

    constructor(name: string, logger: Logger) {
        this.name = name;

        this.logger = logger;
    }
}

@injectable()
class UserFactoryService {
    @inject(Logger) private logger: any;

    create(name: string) {
        return new User(name, this.logger);
    }
}

container.bind<any>(Logger).to(Logger);
container.bind<any>(User).toConstructor(User);
container.bind<any>(UserFactoryService).to(UserFactoryService);

let userFactoryService = container.get<UserFactoryService>(UserFactoryService);

let user1 = userFactoryService.create('foo!');
let user2 = userFactoryService.create('boo!');

console.log(user1);
console.log(user2);