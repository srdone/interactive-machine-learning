import { injectable, inject } from "inversify";
import { Types } from "../types.main";


@injectable()
export class RouteConfigurationService {

  constructor(
    @inject(Types.ExpressApp) private express
  ) {}

  configure() {
    this.express.get('/', (req, res) => res.send('Hello World!'));
  }

}
