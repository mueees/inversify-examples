import "reflect-metadata";
import {Container, inject, injectable, interfaces} from "inversify";

let container = new Container();

@injectable()
class Logger {
    log(message) {
        console.log(message);
    }
}

@injectable()
class User {
    name: string;

    constructor(@inject(Logger) private logger: any) {

    }
}

container.bind<any>(Logger).to(Logger);
container.bind<any>(User).to(User);

container.bind<interfaces.Factory<User>>("UserFactory").toFactory<User>((context: interfaces.Context) => {
    return (name: string) => {
        let user = context.container.get<User>(User);

        user.name = name;

        return user;
    };
});

let UserFactory = container.get<interfaces.Factory<User>>('UserFactory');

let user1 = UserFactory('foo');
let user2 = UserFactory('boo');

console.log(user1);
console.log(user2);