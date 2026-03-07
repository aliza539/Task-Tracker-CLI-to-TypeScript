#!/usr/bin/env node

import { addTask } from "./services/TaskService.js";
import { Priority } from "./models/Task.js";

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case "add":
    const description = args[0];
    const priority = args[1] as Priority;
    addTask(description, priority);
    break;

  default:
    console.log("Unknown command");
}