import axios from "axios";
const endpoint = "https://todoappcamilo.herokuapp.com/tareas"

export const addData = (newData) =>{

    axios.post(endpoint, newData)
        .then(()=>{
            console.log("New note")
        })
        .catch((error)=>{
            console.log(error)
        })

}

export const actualizarData = (data, id) =>{
    
    axios.put(endpoint+id, data)
        .then(()=>{
            console.log("Note updated")
        })
        .catch((error)=>{
            console.log(error)
        })

}

export const eliminarData = (id) =>{

    axios.delete(endpoint+id)
        .then(()=>{
            console.log("Note deleted")
        })
        .catch((error)=>{
            console.log(error)
        })

}

export const limpiarData = (datos)=>{

    datos.forEach(note => {
        if(note.status.includes("completed")){
            eliminarData(note.id)
        }
    });

}