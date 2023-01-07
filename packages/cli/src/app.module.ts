import { Module } from "@nestjs/common";
import { CreateReactComponentCommand } from "./commands";
import { CreateReactHookCommand } from "./commands/create-react-hook";

@Module({
  providers: [CreateReactComponentCommand, CreateReactHookCommand],
})
export class AppModule { }
