import './style.css';

const tasks = [
  {
    description: 'Going to gym',
    complated: false,
    index: 1,
  },
  {
    description: 'Cook dinner',
    completed: false,
    index: 2,
  },
  {
    description: 'Tidy up the house',
    completed: false,
    index: 3,
  },
];

const taskList = document.querySelector('.taskList');

const generateTask = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const tsk = tasks[i];
    taskList.innerHTML += `<li class="task flex">
    <input type="checkbox" id="checked" name="checked" >
    <label class="label" id="label" for="checked">${tsk.description}</label>
    <span>&#8285;</span>
   </li>`;
  }
};

window.onload = generateTask();