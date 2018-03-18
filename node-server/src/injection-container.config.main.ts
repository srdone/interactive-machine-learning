import { Container } from 'inversify';
import { Types } from './types.main';
import { LoggerService } from './services/logger.service.main';
import { AppBootstrap } from './app-bootstrap.main';

const container = new Container();

container.bind<LoggerService>(Types.LoggerService).to(LoggerService);
container.bind<AppBootstrap>(Types.AppBootstrap).to(AppBootstrap);

export { container };
