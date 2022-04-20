import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const todo = res.data as Todo;

  // const ID = todo.ID;
  // const title = todo.Title;
  // const finished = todo.finished;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
		The todo with ID: ${id}
		Has a title of: ${title}
		Is it finished? ${completed}
	`);
};
