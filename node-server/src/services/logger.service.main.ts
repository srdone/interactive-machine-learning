import { injectable } from 'inversify'

@injectable()
export class LoggerService {

  constructor() {}

  debug(...args) {
    console.debug(...args);
  }

}
