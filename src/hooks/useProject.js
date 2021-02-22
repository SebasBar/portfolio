import { useState, useEffect } from "react";
import useAsyncError from "../hooks/useAsyncError";
import fetchApi from "../hooks/fetch";

const CreateProject = (
  name,
  description,
  description2,
  description3,
  github_link,
  deployed_link
) => {
  const [error, setError] = useState("");
  const [project, setProject] = useState({});
  const throwError = useAsyncError();
  // useEffect(() => {
  //   fetchApi("/projects")
  //     .then((projects) => {
  //       setProjectsInfo(projects);
  //       console.log(`Project info: ${projects}`);
  //     })
  //     .catch((err) => {
  //       throwError(err);
  //     });
  // }, []);

  useEffect(() => {
    setProject({
      name: name,
      description: description,
      description2: description2,
      description3: description3,
      github_link: github_link,
      deployed_link: deployed_link,
    });
    console.log(project);
  }, []);

  return fetchApi(`/projects`, "POST", project)
    .then((project) => {
      console.log(project);
    })
    .catch((err) => {
      setError(err.message);
    });

  // const handleDeleteTodo = (todolistId) => {
  //   fetchApi(`/todolist/${todolistId}`, "DELETE")
  //     .then((deletedTodolist) => {
  //       setTodolists((todolists) =>
  //         todolists.filter((todolist) => deletedTodolist.id !== todolist.id)
  //       );
  //     })
  //     .catch((err) => setError(err.message));
  // };
  // const handleUpdate = (todolistId, newData) => {
  //   fetchApi(`/todolist/${todolistId}`, "PUT", { title: newData })
  //     .then((updatedTodolist) => {
  //       setTodolists((todolists) =>
  //         todolists.map((todolist) => {
  //           if (todolist.id === updatedTodolist.id) {
  //             return updatedTodolist;
  //           }
  //           return todolist;
  //         })
  //       );
  //     })
  //     .catch((err) => setError(err.message));
  // };
};

export default CreateProject;
