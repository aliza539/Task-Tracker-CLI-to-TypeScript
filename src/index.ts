#!/usr/bin/env node
import { showMenu } from "./utils/menu.js";
import { addTask } from "./services/TaskService.js";
import { Priority } from "./models/Task.js";
import chalk from "chalk";

console.log(chalk.green("Task Tracker CLI"));

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case "add":
    const description = args[0];
    const priority = args[1] as Priority;
    addTask(description, priority);
    break;
case "help":
    showMenu();
    break;

  default:
    console.log("Unknown command");
    showMenu();
}