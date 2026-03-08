# Task-Tracker-CLI-to-TypeScript

A simple **Command Line Task Tracker** built with **TypeScript and Node.js**.
This project is a TypeScript conversion of a basic Task Tracker CLI application and demonstrates the use of **interfaces, enums, generics, and TypeScript configuration** in a Node.js environment.

## Features

* Add new tasks
* Update existing tasks
* Delete tasks
* Mark tasks as completed
* List all tasks
* Search tasks by priority
* Sort tasks by priority
* View task statistics
* Command line help menu

All tasks are stored in a **JSON file** for persistence.

## Tech Stack

* Node.js
* TypeScript
* File System (fs module)

## TypeScript Concepts Used

This project demonstrates several TypeScript features:

* **Interfaces** – defining the structure of a Task
* **Enums** – managing task priorities
* **Generics** – reusable filtering functions
* **Union Types**
* **Optional Parameters**
* **Type-safe functions**
* **Node.js TypeScript configuration (tsconfig)**

## Run the CLI

Start the CLI application:

```
npm start
```

Or directly run:

```
node dist/index.js
```

---

## CLI Commands

Add a task:

```
node dist/index.js add "Learn TypeScript" high
```

List all tasks:

```
node dist/index.js list
```

Update a task:

```
node dist/index.js update 1 "Finish TypeScript project"
```

Delete a task:

```
node dist/index.js delete 1
```

Mark task as completed:

```
node dist/index.js mark 1 done
```

Search tasks by priority:

```
node dist/index.js search priority high
```

Sort tasks:

```
node dist/index.js sort priority desc
```

View statistics:

```
node dist/index.js stats
```

Show help menu:

```
node dist/index.js help
```

---

## Example Task Format

Tasks are stored in `tasks.json` like this:

```
[
  {
    "id": 1,
    "description": "Learn TypeScript",
    "priority": "high",
    "status": "todo"
  }
]
```

## Learning Goals

This project was built to practice:

* Converting a JavaScript CLI application to TypeScript
* Understanding TypeScript types and configuration
* Building a simple command-line tool using Node.js

---

## Author

Created as part of a **TypeScript learning project for MERN development**.
