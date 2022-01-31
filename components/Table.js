import { useEffect, useState } from "react";
import Axios, * as others from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Table() {
  const [taskDescription, setTaskDescription] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const submitTask = () => {
    if (!taskDescription) {
      toast.error("Por favor insira uma tarefa");
    } else {
      toast.success("Tarefa inserida com sucesso!");
      Axios.post("http://localhost:3001/api/insert", {
        taskDescription: taskDescription,
      }).then(() => {});
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setTaskList(response.data);
    });
  });

  const putTask = (idtasks) => {
    if (!newTask) {
      toast.error("Por favor insira alguma frase");
    } else {
      toast.success("Tarefa atualizada com sucesso!");
      Axios.put("http://localhost:3001/api/update", {
        taskDescription: newTask,
        idtasks: idtasks,
      }).then(() => {});
    }
  };

  const deleteTask = (idtasks) => {
    Axios.delete(`http://localhost:3001/api/delete/${idtasks}`);
    toast.success("Tarefa excluída com sucesso!");
  };

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="flex flex-col w-2/3 bg-black text-white rounded-md">
        <div className="flex flex-col justify-center">
          <h1 className="px-5 py-2 text-2xl">Lista de Tarefas</h1>
          <hr className="border-2" />
        </div>
        <div className="p-6">
          <div>
            <div className="relative">
              <input
                type="text"
                className="text-black h-14 w-96 pl-2 rounded-lg z-0"
                placeholder="Insira uma tarefa"
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
              />
              <div className="absolute top-2 right-2">
                <button
                  className="text-black rounded-lg bg-white p-3"
                  onClick={submitTask}
                >
                  Inserir tarefa
                </button>{" "}
              </div>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4"></th>
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Tarefa</th>
                <th className="p-4">Ações</th>
              </tr>
            </thead>
            {taskList.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td className="text-left p-4">
                      <input type="checkbox" />
                    </td>
                    <td className="text-left p-4">{val.idtasks}</td>
                    <td className="text-left p-4">{val.taskDescription}</td>
                    <td className="flex justify-center">
                      <button
                        className="flex justify-center items-center p-2"
                        onClick={() => {
                          deleteTask(val.idtasks);
                        }}
                      >
                        <i className="fas fa-trash-alt cursor-pointer"></i>
                      </button>
                      <input
                        className="block text-gray-700 text-sm font-bold mb-2"
                        type="text"
                        placeholder="Altere sua tarefa"
                        onChange={(e) => {
                          setNewTask(e.target.value);
                        }}
                      ></input>
                      <button
                        className="flex justify-center items-center p-2"
                        onClick={() => {
                          putTask(val.idtasks);
                        }}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
