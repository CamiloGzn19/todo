import { actualizarData, eliminarData, limpiarData } from "../actions/actionAxios";
import { types } from "../types/types";

const initialState = {
    notas:[]
}

export const notasReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.GET_DATA:
            return {
                ...state,
                notas: action.payload.map((data) => data),
            }
        case types.ADD_NOTA:
            return {
                ...state,
                notas: [ action.payload, ...state.notas]
            }
        case types.MARK_NOTA:
            const note = state.notas.find((n)=>(n.id===action.payload))
            const filter = state.notas.filter((n)=>(n.id!==action.payload))
            const newStatus = (note.status==="active") ? "completed" : "active"
            const newNote = {nota:note.nota, id:note.id, status:newStatus}
            actualizarData(newNote, note.id)
            return{
                ...state,
                notas: [newNote, ...filter]
            }
        case types.DELETE_NOTA:
            const newData = state.notas.filter((n)=>(n.id!==action.payload))
            eliminarData(action.payload)
            return{
                ...state,
                notas: [...newData]
            }
        case types.CLEAN_COMPLETED:
            const notasActivas = state.notas.filter((n)=>(n.status.includes("active")))
            limpiarData(state.notas)
            return{
                ...state,
                notas: [...notasActivas]
            }
        default:
            return state;
    }
}