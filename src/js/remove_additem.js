const Tasks = require('./tasks.js');

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

  removetask = (item) => {
    const key = item;
    if (this.taskData.length === 1) {
      this.taskData = [];
    } else {
      this.taskData.splice(key, 1);
    }
    this.taskData.forEach((elem, index) => {
      elem.index = index + 1;
    });
    if (typeof window !== 'undefined') {
      localStorage.setItem('TodoListDB', JSON.stringify(this.taskData));
      this.displayTask();
    }
    return this.taskData;
  };
}
module.exports = Todolist;
