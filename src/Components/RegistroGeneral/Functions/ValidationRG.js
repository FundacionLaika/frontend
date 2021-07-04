export function validationRG(state) {
    var msg = "";
    if (!state.nombre.trim()) msg += "•  Nombre\n"; 
    if (!state.edad) msg += "•  Edad\n"; 
    if (!state.genero) msg += "•  Género\n"; 
    if (!state.especie) msg += "•  Especie\n"; 
    if (!state.fechaDeRescate) msg += "•  Fecha de rescate\n"; 
    if (!state.estatus) msg += "•  Estatus\n"; 
    if (!state.municipio.trim()) msg += "•  Municipio\n";
    if (!state.senasParticulares.trim()) msg += "•  Señas particulares\n";
    if (!state.rescatistas.length) msg += "•  Rescatistas\n"; 
    if (!state.foto) msg += "•  Foto\n"; 

    if (msg) {
        return {isValid: false, msg: msg};
    } else {
        return {isValid: true};
    }
}