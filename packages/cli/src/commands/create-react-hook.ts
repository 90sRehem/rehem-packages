import { Command, CommandRunner } from "nest-commander";
import { writeFile, mkdir } from "node:fs";
import { writeFileErrorHandler } from "../utils";
import {
  createHook,
  createHookTests,
  createIndex,
} from "../templates/react-hook";

type ICreactReactHookOptions = Record<string, any>;

@Command({
  name: "create-react-hook",
  description: "Create a new react hook",
  options: {
    isDefault: true,
  },
  aliases: ["crh"],
  argsDescription: {
    name: "The name of the hook",
  },
  arguments: "<name>",
})
export class CreateReactHookCommand extends CommandRunner {
  async run(
    passedParams: string[],
    options?: ICreactReactHookOptions,
  ): Promise<void> {
    const name = passedParams[0];
    try {
      this.createHook(name);
    } catch (error) {
      console.log(
        "🚀 ~ file: create-react-hook.ts:33 ~ CreateReactHookCommand ~ error",
        error,
      );
    }
  }

  public createHook(name: string): void {
    mkdir(name, (err) => {
      if (err) {
        console.log(err);
      }
      writeFile(`${name}/${name}.ts`, createHook(name), writeFileErrorHandler);
      writeFile(`${name}/index.ts`, createIndex(name), writeFileErrorHandler);
      writeFile(
        `${name}/${name}.test.ts`,
        createHookTests(name),
        writeFileErrorHandler,
      );
    });
    console.log(`
  Successfully created ${name} hook with the following structure:
  |
  +-- ./${name}.ts
  |
  +-- ./${name}.test.ts
  |
  +-- ./index.ts
  `);
  }
}
