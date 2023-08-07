# Hook To-Do List Project

This is a simple To-Do List web application built using React. It allows users to manage their daily tasks by adding new tasks, marking tasks as completed, and deleting tasks when they are no longer needed. Open <a href="https://hook-mu.vercel.app/" target="_blank">Hook</a> to open the completed projects.

## Features

- Add new tasks: Users can add new tasks to the to-do list.
- Mark tasks as completed: Users can mark tasks as completed by checking the checkbox next to the task.
- Delete tasks: Users can delete tasks from the to-do list using the delete icon.

## Getting Started

To run the To-Do List project locally, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/jrshittu/hook.git
   cd hook
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Start the development server:**

   ```
   npm start
   ```

   The application will be running at `http://localhost:3000` in your web browser.

## Project Structure

The project structure is organized as follows:

```
todo-list/
  ├── src/
  │   ├── components/
  │   │   ├── App.js
  │   │   ├── TodoList.js
  │   │   ├── TodoItem.js
  │   │   └── AddTodoForm.js
  │   ├── App.js
  │   └── index.js
  ├── public/
  │   └── index.html
  ├── package.json
  └── README.md
```

- `App.js`: The main component that renders the entire To-Do List application.
- `TodoList.js`: Renders the list of tasks based on the `todos` array received as a prop.
- `TodoItem.js`: Renders an individual task item with a checkbox and a delete icon.
- `AddTodoForm.js`: Renders the input field and the "Add Task" button to allow users to add new tasks.
- `index.js`: Entry point of the application that renders the `App` component into the root DOM element.
- `public/`: Contains the index.html file, the main HTML template for the application.
- `package.json`: Contains the project's dependencies and configuration.
- `README.md`: This file, containing information about the project.

## Dependencies

The To-Do List project utilizes the following main dependencies:

- React: A JavaScript library for building user interfaces.
- Material-UI: A popular React UI framework that provides pre-built components and styles.

## Contributing

If you find any issues with the application or have suggestions for improvement, feel free to open an issue or create a pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for checking out the To-Do List project! If you have any questions or feedback, please don't hesitate to reach out. Happy task managing!
