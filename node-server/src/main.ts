import "reflect-metadata";
import { container } from "./injection-container.config.main";
import { Types } from "./types.main";
import { AppBootstrap } from "./app-bootstrap.main";

const boostrap = container.get<AppBootstrap>(Types.AppBootstrap);

boostrap.bootstrap();
