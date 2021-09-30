export interface Docentes {
    nombres_completo:    string;
    titulo:              string;
    docente_tipo_tiempo: string;
    materias:            Materia[];
    carreras:            Carrera[];
}

 interface Carrera {
    nombrecarrera: string;
}

 interface Materia {
    nombre: string;
}

