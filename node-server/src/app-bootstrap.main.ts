import { injectable, inject } from "inversify";
import { LoggerService } from "./services/logger.service.main";
import { Types } from "./types.main";
import { RouteConfigurationService } from "./routes/route-configuration.service.main";

@injectable()
export class AppBootstrap {

  constructor(
    @inject(Types.LoggerService) private logger: LoggerService,
    @inject(Types.RouteConfigurationService) private routeConfiguration: RouteConfigurationService,
    @inject(Types.ExpressApp) private expressApp
  ) {}

  bootstrap() {
    this.routeConfiguration.configure();
    this.logger.debug(`We did it!`);

    this.expressApp.listen(3000, () => console.log(`Example app listening on port 3000`));
  }

}
