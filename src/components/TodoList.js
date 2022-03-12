import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/actions/actionAxios";
import {
  addTodo,
  loadTodo,
  cleanCompleted,
  eliminarNota,
  limpiarCompletado,
  markTodo,
} from "../redux/actions/notasActions";
import { Main } from "../styles/body_styles"
import { OpNav } from "../styles/bottom_styles";

const ListToDo = () => {
  const iconSelect =
    "https://res.cloudinary.com/dilwbkj5s/image/upload/v1647053088/Reto%206/icon-check_tfn9u3_xnculb.svg";
  const iconClose =
    "https://res.cloudinary.com/dilwbkj5s/image/upload/v1647053054/Reto%206/icon-cross_erxojp_mlpbej.svg";
  const dispatch = useDispatch();
  const { notas } = useSelector((state) => state.notas);
  const endpoint = "https://todoappcamilo.herokuapp.com/tareas";
  const [filter, setFilter] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const lista = notas.filter((note) => note.status.includes(filter));
  const itemsLeft = notas.filter((note) =>
    note.status.includes("active")
  ).length;

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        dispatch(loadTodo(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      const id =
        newTodo.at(0) +
        String(Math.round(Math.random() * 1000)) +
        newTodo.at(newTodo.length - 1);
      const nueva = { nota: newTodo, status: "active", id };
      addData(nueva);
      dispatch(addTodo(nueva));
      setNewTodo("");
    }
  };

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  };

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={newTodo}
          onChange={handleChange}
        />
      </form>
      <div>
        {lista.length === 0 && (
          <div>
            <p className="no-notes">{`No ${filter} notes`}</p>
          </div>
        )}
        {lista.map((note) => (
          <div key={note.id} className={note.status}>
            <button
              className="btn-select"
              onClick={() => dispatch(markTodo(note.id))}
            >
              <img src={iconSelect} alt="Icon check" />
            </button>
            <p>{note.nota}</p>
            <button
              className="btn-close"
              onClick={() => dispatch(eliminarNota(note.id))}
            >
              <img src={iconClose} alt="Icon close" />
            </button>
          </div>
        ))}
      </div>
      <OpNav>
        <p>{itemsLeft} items left</p>
        <div className={filter}>
          <button onClick={() => setFilter("")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <button onClick={() => dispatch(cleanCompleted())}>
          clear completed
        </button>
      </OpNav>
    </Main>
  );
};

export default ListToDo;
