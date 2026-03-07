import { Priority } from "../models/Task.js";
import type { Task } from "../models/Task.js";
import { loadTasks, saveTasks } from "../utils/fileHandler.js";
import { findByProp } from "../utils/fileHandler.js";

export function addTask(
  description: string,
  priority: Priority = Priority.MEDIUM
): void {
  const tasks = loadTasks();

  const newTask: Task = {
    id: tasks.length + 1,
    description,
    status: "to-do",
    priority,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  tasks.push(newTask);
  saveTasks(tasks);
  console.log("Task added!");
}

export function sortTasks<T>(
  items: T[],
  key: keyof T,
  order: "asc" | "desc" = "asc"
): T[] {
  return items.sort((a, b) =>
    order === "asc"
      ? (a[key] > b[key] ? 1 : -1)
      : (a[key] < b[key] ? 1 : -1)
  );
}
export function searchByPriority(priority: string) {

  const tasks = loadTasks();

  const result = findByProp<Task>(
    tasks,
    "priority",
    priority
  );

  console.log(result);
}