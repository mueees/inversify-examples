interface ILogger {
    log(message: string): void;
}

interface IUser {
    name: string;
}

interface IUserFactoryService {
    create(name: string): IUser;
}

export {ILogger, IUser, IUserFactoryService};