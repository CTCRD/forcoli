export default {
  render (h) {
    return (
      <span>
        <el-input/>
        <el-date-picker
          type="date"
          placeholder="Selecciona un día">
        </el-date-picker>
        <div>Hey there you</div>  
      </span>
    )
  }
}

function clasificar(campo){
  switch(campo.tipo){
    case "texto":
      return <a-input placeholder="" />
    case "lista":
    case "fecha":
    case "cotejo":
    case "hora":
    case "sub":
  }
}

let uso = [
  {
    nombre: "CTC",
    tipo: "lista",
    col: 5,
    opciones: [
      "La Barquita",
      "Jimaní"
    ]
  },
  {
    nombre: "Fecha",
    tipo: "fecha",
    col: 3
  },
  {
    nombre: "Nombre(s)",
    tipo: "texto",
    col: 2
  },
  {
    nombre: "Apellido(s)",
    tipo: "texto",
    col: 2
  },
  {
    nombre: "Sexo",
    tipo: "cotejo",
    col: 2,
    opciones: [
      "F", 
      "M"
    ]
  },
  {
    nombre: "Edad",
    tipo: "numero",
    col: 2
  },
  {
    nombre: "Nivel de Instrucción",
    tipo: "lista",
    col: 8,
    opciones: [
      "Primaria",
      "Estudiante Universitario",
      "Técnico",
      "Profesional"
    ],
    adicional: true
  },
  {
    nombre: "Zona o Comunidad",
    tipo: "texto",
    col: 4
  },
  {
    nombre: "Hora de entrada",
    tipo: "hora",
    col: 2
  },
  {
    nombre: "Hora de salida",
    tipo: "hora",
    col: 2
  },
  {
    nombre: "Identidad Electronica",
    tipo: "texto",
    col: 8
  },
  {
    nombre: "Indique el espacio Maker solicitado y su uso",
    tipo: "lista",
    col: 8,
    expandible: true,
    opciones: [
      { 
        nombre: "Producción digital",
        tipo: "lista",
        multiple: true,
        opciones: [
          "Desarrollo de software",
          "Diseño y modelado de producto",
          "Creación de aplicaciones moviles",
          "Creación de página Web",
          "Acceso a Información de base tecnológica",
          "Creación de diseño grafico",
          "Creación de aplicaciones moviles",
          "Ceación de video juego",
          "Edición de video",
        ]
      },
      {
        nombre: "Fabricación digital",
        tipo: "lista",
        multiple: true,
        opciones: [
          "Maquinado de piezas",
          "Construcción de prototipos mecánicos inteligentes",
          "Imprensión 3D",
          "Ensamblaje de circuitos"
        ]
      },
      {
        nombre: "Workshop",
        tipo: "lista",
        multiple: true,
        opciones: [
          "Construcción de Maqueta",
          "Trabajos de Carpintería"
        ]
      },
      {
        nombre: "Coworking",
        tipo: "lista",
        multiple: true,
        opciones: [
          "Formulación de proyectos",
          "Generación de ideas",
          "Realización de Teletrabjo"
        ]
      },
      {
        nombre: "Estudio de Fotografía",
        tipo: "lista",
        multiple: true,
        opciones: [
          "Sección fotográfica",
          "Fotografía de productos",
          "Retoque Fotográfico"
        ]
      },
      {
        nombre: "Estudio de grabación",
        tipo: "lista",
        multiple: true,
        opciones: [
          "Grabación de audio",
          "Producción Músical"
        ]
      }
      
    ]
  },
  {
    nombre: "Evaluación del servicio",
    tipo: "sub"
  },
  {
    nombre: "¿Le ha sido util el espacio para lo que necesitaba realizar?",
    tipo: "cotejo",
    col: 8,
    opciones: [
      "Si",
      "No"
    ]
  }
]
