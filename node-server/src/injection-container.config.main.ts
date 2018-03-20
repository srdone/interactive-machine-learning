import { Container } from 'inversify';
import * as express from 'express';

import { Types } from './types.main';
import { LoggerService } from './services/logger.service.main';
import { AppBootstrap } from './app-bootstrap.main';
import { RouteConfigurationService } from './routes/route-configuration.service.main';

const container = new Container();
const expressApp = express();

container.bind<Express.Application>(Types.ExpressApp).toFunction(expressApp);
container.bind<LoggerService>(Types.LoggerService).to(LoggerService);
container.bind<AppBootstrap>(Types.AppBootstrap).to(AppBootstrap);
container.bind<RouteConfigurationService>(Types.RouteConfigurationService).to(RouteConfigurationService);

export { container };
