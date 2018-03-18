import { injectable, inject } from "inversify";
import { LoggerService } from "./services/logger.service.main";
import { Types } from "./types.main";

@injectable()
export class AppBootstrap {

  constructor(
    @inject(Types.LoggerService) private logger: LoggerService
  ) {}

  bootstrap() {
    this.logger.debug(`We did it!`);
  }

}
