import {injectable} from "inversify";
import {ILogger} from "./interfaces";

@injectable()
export class Logger implements ILogger {
    log(message) {
        console.log(message);
    }
}