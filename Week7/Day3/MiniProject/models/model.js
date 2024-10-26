import fs from "fs";

export const _saveNewTask = (newTask, fileName) => {
  try {
    if (
      !newTask.id ||
      !newTask.task ||
      !newTask.status ||
      Object.keys(newTask).length !== 3
    ) {
      throw new Error("Incorrect data format for task");
    }
    let tasks = [];
    if (fs.existsSync(fileName)) {
      const data = fs.readFileSync(fileName, "utf8");
      tasks = JSON.parse(data);
    }
    if (!tasks.find((elem) => elem.id == newTask.id)) {
      tasks.push(newTask);
      fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2));
      return true;
    } else {
      return false;
    }
  } catch (e) {
    throw new Error("Error while writing: " + e.message);
  }
};

export const _getAllTasks = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    throw new Error("Error while reading all tasks: " + e.message);
  }
};

export const _getTaskByID = (id, fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf-8");
    const tasks = JSON.parse(data);
    return tasks.find((elem) => elem.id == id);
  } catch (e) {
    throw new Error("Error while reading task by ID: " + e.message);
  }
};

export const _updateTaskByID = (id, task, status, fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf-8");
    const tasks = JSON.parse(data);
    const index = tasks.findIndex((elem) => elem.id == id);
    if (index != -1) {
      tasks[index] = { id: id, task, status };
    }
    fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2));
    return tasks;
  } catch (error) {
    throw new Error("Error while updating: " + error.message);
  }
};

export const _deleteTaskByID = (id, fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf-8");
    const tasks = JSON.parse(data);
    const index = tasks.findIndex((elem) => elem.id == id);
    if (index != -1) {
      tasks.splice(index, 1);
    }
    fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2));
    return tasks;
  } catch (error) {
    throw new Error("Error while deleting: " + error.message);
  }
};
