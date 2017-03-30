import "reflect-metadata";
import {Container, inject, injectable, interfaces} from 'inversify';
import Newable = interfaces.Newable;

let container = new Container();

@injectable()
class Logger {
    log(message) {
        console.log(message);
    }
}

@injectable()
class Email {
    address: string;
}

@injectable()
class User {
    email: Email;

    constructor(@inject(Logger) private logger: any) {

    }
}

container.bind<any>(Logger).to(Logger);
container.bind<any>(User).to(User);
container.bind<any>(Email).to(Email);

container.bind<interfaces.Factory<User>>("UserFactory").toFactory<User>((context: interfaces.Context) => {
    return (address: string) => {
        let user = context.container.get<User>(User);
        let email = context.container.get<Email>(Email);

        email.address = address;

        user.email = email;

        return user;
    };
});

let UserFactory = container.get<interfaces.Factory<User>>('UserFactory');

let user1 = UserFactory('foo');
let user2 = UserFactory('boo');

console.log(user1);
console.log(user2);