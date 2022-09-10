import React, { useState, useEffect } from "react";
import { TodoList } from "./components/TodoList";
import "./styles/general.scss";
import "./App.scss";
import Form from "./components/Form/Form";
import { Search } from "./components/Search/Search";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage?.getItem("todos")) || []
  );
  const [allTodosForFilter, setAllTodosForFilter] = useState(
    JSON.parse(localStorage?.getItem("todos")) || []
  );
  const [isEmpty, setIsEmpty] = useState(todos.length > 0 ? true : false);

  const addToDo = (item) => {
    setTodos([...todos, item]);
    setAllTodosForFilter([...todos, item]);
  };

  const editTodo = (index, item) => {
    const newTodos = [...todos];
    newTodos[index] = item;
    setTodos(() => newTodos);
    setAllTodosForFilter(() => newTodos);
  };

  const filterTodos = (condition) => {
    console.log(condition, "-----------");
    if (condition === "all") {
      setTodos(allTodosForFilter);
    } else if (condition === "completed") {
      let filteredTodos = allTodosForFilter.filter((item) => item.complited);
      setTodos(filteredTodos);
      localStorage.setItem("todos", JSON.stringify(allTodosForFilter));
    } else if (condition === "uncompleted") {
      let filteredTodos = allTodosForFilter.filter((item) => !item.complited);
      setTodos(filteredTodos);
      localStorage.setItem("todos", JSON.stringify(allTodosForFilter));
    }
  };

  const searchTodos = (value) => {
    let filteredTodos = allTodosForFilter.filter((item) =>
      item.title.includes(value)
    );
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(allTodosForFilter));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
    todos.length > 0 ? setIsEmpty(true) : setIsEmpty(false);
  }, [todos]);

  const removeToDo = (index) => {
    const fullTodos = todos.filter((item, i) => i !== index);
    setTodos(fullTodos, console.log(todos));
    setAllTodosForFilter(() => fullTodos);
  };

  const handleCheck = (index, check) => {
    const newTodos = [...todos];
    newTodos[index].complited = check;
    setTodos(() => newTodos);
  };

  return (
    <div className="App">
      <h1 className="App__header">TODO List</h1>
      <Form addToDo={addToDo} todos={todos} />
      <div className="App__seacrh">
        <Search
          filterTodos={filterTodos}
          searchTodos={searchTodos}
          todos={todos}
        />
      </div>
      <h3 className={isEmpty ? "App__header-list-empty" : "App__header-list"}>
        The list is empty, please add the first task
      </h3>
      <div className={isEmpty ? "App__list-empty" : "App__list"}>
        <TodoList
          removeToDo={removeToDo}
          todos={todos}
          editTodo={editTodo}
          handleCheck={handleCheck}
        />
      </div>
    </div>
  );
};

export default App;
