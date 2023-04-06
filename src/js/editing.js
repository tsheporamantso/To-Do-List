const Tasks = require('./tasks.js');
const TaskStatus = require('./taskStatus.js');

class Todolist {
  constructor() {
    this.taskData = [];
  }

  addtask = (description, completed, index) => {
    const newtask = new Tasks(description, completed, index);
    this.taskData.push(newtask);
    index = this.taskData.length + 1;
    if (typeof window !== 'undefined') {
      localStorage.setItem('TodoListDB', JSON.stringify(this.taskData));
    }
    return this.taskData;
  };

  updateTask(item, description) {
    if (this.taskData[item]) {
      this.taskData[item].description = description;
    }
    this.taskData.forEach((elem, index) => {
      elem.index = index;
    });
    if (typeof window !== 'undefined') {
      localStorage.setItem('TodoListDB', JSON.stringify(this.taskData));
      this.displayTask();
    }
    return this.taskData[item].description;
  }

  clearAllCompletTask = () => {
    this.taskData = this.taskData.filter((elem) => elem.completed === false);
    this.taskData.forEach((e, index) => {
      e.index = index;
    });
    if (typeof window !== 'undefined') {
      localStorage.setItem('TodoListDB', JSON.stringify(this.taskData));
      window.location.reload();
    }
    return this.taskData;
  };

  Updatestatus = (item) => {
    const status = new TaskStatus();
    if (this.taskData[item]) {
      if (this.taskData[item].completed === true) {
        return status.checked(this.taskData[item]);
      }

      return status.unchecked(this.taskData[item]);
    }
    return this.taskData;
  }
}

module.exports = Todolist;
