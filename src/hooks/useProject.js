import { useState, useEffect } from "react";
import useAsyncError from "../hooks/useAsyncError";
import fetchApi from "../hooks/fetch";

export default function useProject() {
  const [error, setError] = useState("");
  const [projecstInfo, setProjectsInfo] = useState([]);
  const throwError = useAsyncError();
  useEffect(() => {
    fetchApi("/projects")
      .then((projects) => {
        setProjectsInfo(projects);
        console.log(`Project info: ${projects}`);
      })
      .catch((err) => {
        throwError(err);
      });
  }, []);

  const handleAddTodo = () => {
    let newProject = { title: "New Project" };
    // Optimistic UI (We update the state before with a temporary item)
    // setTodolists([...todolists, newTodo]);
    fetchApi(`/project`, "POST", newProject)
      .then((project) => {
        setProjectsInfo([...projects, project]);
      })
      .catch((err) => {
        setError(err.message);
        // If error, we roll back to the previous state
        // setTodolists(todolists);
      });
  };
  const handleDeleteTodo = (todolistId) => {
    fetchApi(`/todolist/${todolistId}`, "DELETE")
      .then((deletedTodolist) => {
        setTodolists((todolists) =>
          todolists.filter((todolist) => deletedTodolist.id !== todolist.id)
        );
      })
      .catch((err) => setError(err.message));
  };
  const handleUpdate = (todolistId, newData) => {
    fetchApi(`/todolist/${todolistId}`, "PUT", { title: newData })
      .then((updatedTodolist) => {
        setTodolists((todolists) =>
          todolists.map((todolist) => {
            if (todolist.id === updatedTodolist.id) {
              return updatedTodolist;
            }
            return todolist;
          })
        );
      })
      .catch((err) => setError(err.message));
  };

  return {
    error,
    todolists,
    onAdd: handleAddTodo,
    onDelete: (todolistId) => handleDeleteTodo(todolistId),
    onUpdate: (todolistId, newData) => handleUpdate(todolistId, newData),
  };
}
