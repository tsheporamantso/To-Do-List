const Todolist = require('./remove_additem.js');
// addFunction testing

describe('testing addtask and removetask functions', () => {
  const arr = new Todolist();
  const description = 'burak';
  const completed = true;
  const index = 1;
  test('add task to arr', () => {
    const addedTask = arr.addtask(description, completed, index);
    expect(addedTask).toHaveLength(1);
  });

  test('remove task from arr', () => {
    const removeTask = arr.removetask(1);
    expect(removeTask).toHaveLength(0);
  });
});
