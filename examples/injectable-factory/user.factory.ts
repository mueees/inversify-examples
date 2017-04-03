import {injectable} from "inversify";
import {container} from "./container";
import {TYPES} from "./types";

@injectable()
export class UserFactory {
    create(name: string) {
        let user = container.get<any>(TYPES.User);

        user.name = name;

        return user;
    }
}