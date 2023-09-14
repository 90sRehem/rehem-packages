import { Command, CommandRunner, Option } from "nest-commander";
import { writeFile, mkdir } from "fs";

import {
  createComponent,
  createComponentStyles,
  createComponentTests,
  createIndex,
} from "../templates/react";
import { capitalizeFirstLetter, writeFileErrorHandler } from "../utils";

interface CreateComponentOptions {
  styles: boolean;
  path: string;
}

@Command({
  name: "create-component",
  description: "Create a new component",
  options: {
    isDefault: true,
  },
  aliases: ["cc"],
  argsDescription: {
    name: "The name of the component",
  },
  arguments: "<name>",
})
export class CreateReactComponentCommand extends CommandRunner {
  async run(inputs: string[], options?: CreateComponentOptions): Promise<void> {
    try {
      const name = capitalizeFirstLetter(inputs[0]);
      if (options.path) {
        this.createFullcomponent(name, options.path);
      } else {
        await this.createFullcomponent(name);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: create-component.ts:34 ~ CreateComponentCommand ~ run ~ error",
        error,
      );
    }
  }

  public async createComponent(name: string): Promise<void> {
    console.log(`Creating component ${name}`);
    writeFile(`./${name}.tsx`, createComponent(name), writeFileErrorHandler);
    writeFile(`./${name}.ts`, createIndex(name), writeFileErrorHandler);
  }

  public async createFullcomponent(name: string, path?: string): Promise<void> {
    const currentName = capitalizeFirstLetter(name);
    if (path) {
      mkdir(path, (err) => {
        if (err) {
          console.log(err);
        }
        writeFile(
          `${path}/${currentName}.tsx`,
          createComponent(name),
          writeFileErrorHandler,
        );
        writeFile(
          `${path}/${currentName}.styles.ts`,
          createComponentStyles(),
          writeFileErrorHandler,
        );
        writeFile(`${path}/index.ts`, createIndex(name), writeFileErrorHandler);
        writeFile(
          `${path}/${currentName}.test.ts`,
          createComponentTests(name),
          writeFileErrorHandler,
        );
      });
    } else {
      mkdir(currentName, (err) => {
        if (err) {
          console.log(err);
        }

        writeFile(
          `${currentName}/${currentName}.tsx`,
          createComponent(name),
          writeFileErrorHandler,
        );
        writeFile(
          `${currentName}/${currentName}.styles.ts`,
          createComponentStyles(),
          writeFileErrorHandler,
        );
        writeFile(
          `${currentName}/index.ts`,
          createIndex(name),
          writeFileErrorHandler,
        );
        writeFile(
          `${currentName}/${currentName}.test.ts`,
          createComponentTests(name),
          writeFileErrorHandler,
        );
      });
    }
    console.log(`
  Successfully created component ${currentName} structure:
  |
  +-- ./${currentName}.tsx
  |
  +-- ./${currentName}.styles.ts
  |
  +-- ./${currentName}.ts
  |
  +-- ./${currentName}.test.ts
  `);
  }

  @Option({
    flags: "-p, --path [boolean]",
    description: "The path to create the component",
    name: "path",
  })
  public getPath(path: string): string {
    return path;
  }
}
