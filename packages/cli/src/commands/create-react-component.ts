import { Command, CommandRunner, Option } from "nest-commander";
import { writeFile, mkdir } from "fs";

import {
  createComponent,
  createComponentStyles,
  createComponentTests,
  createIndex,
} from "../templates/react";

interface CreateComponentOptions {
  styles: boolean;
  path: string;
}

function writeFileErrorHandler(err: unknown) {
  if (err) throw err;
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
      const name = inputs[0];
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
    if (path) {
      mkdir(path, (err) => {
        if (err) throw err;
      });
      writeFile(
        `${path}/${name}.tsx`,
        createComponent(name),
        writeFileErrorHandler,
      );
      writeFile(
        `${path}/${name}.styles.ts`,
        createComponentStyles(name),
        writeFileErrorHandler,
      );
      writeFile(`${path}/index.ts`, createIndex(name), writeFileErrorHandler);
      writeFile(
        `${path}/${name}.test.ts`,
        createComponentTests(name),
        writeFileErrorHandler,
      );
      console.log(`
Successfully created component
${name}
|
+-- ./${name}.tsx
|
+-- ./${name}.styles.ts
|
+-- ./${name}.ts
|
+-- ./${name}.test.ts
`);
    } else {
      writeFile(`./${name}.tsx`, createComponent(name), writeFileErrorHandler);
      writeFile(
        `./${name}.styles.ts`,
        createComponentStyles(name),
        writeFileErrorHandler,
      );
      writeFile(`./index.ts`, createIndex(name), writeFileErrorHandler);
      writeFile(
        `./${name}.test.ts`,
        createComponentTests(name),
        writeFileErrorHandler,
      );
      console.log(
        `Successfully created component ${name}.tsx, ${name}.styles.ts, index.ts, ${name}.test.ts`,
      );
    }
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
