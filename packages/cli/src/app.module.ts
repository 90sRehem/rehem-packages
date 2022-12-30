import { Module } from "@nestjs/common";
import { CreateReactComponentCommand } from "./commands";

@Module({
  providers: [CreateReactComponentCommand],
})
export class AppModule {}
