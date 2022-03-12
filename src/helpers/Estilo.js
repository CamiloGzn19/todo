//Modificador del aspecto de la página

export const obtenerTema = () => {
    const theme = localStorage.getItem("theme")
    const valTema = (theme===null) ? "light" : theme
    return valTema
}

export const cambiarTema = () =>{
    const valTema = obtenerTema()
    const newTheme = (valTema==="light") ? "dark" : "light"
    localStorage.setItem("theme", newTheme)
    return newTheme
}