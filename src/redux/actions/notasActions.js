import { types } from "../types/types"

// Acciones principales
export const loadTodo = (data) =>({
    type : types.GET_DATA,
    payload : data
})

export const addTodo = (nota) =>({
    type: types.ADD_NOTA,
    payload: nota
})

export const markTodo = (id) =>({
    type: types.MARK_NOTA,
    payload: id
})

export const eliminarNota = (id) =>({
    type: types.DELETE_NOTA,
    payload: id
})

export const cleanCompleted = () =>({
    type: types.CLEAN_COMPLETED
})

