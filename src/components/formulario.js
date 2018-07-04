import { createNamespacedHelpers } from "vuex";

export default {
  data: () => ({
    formulario: {}
  }),
  methods: {
    sync (prop, value) {
      this.formulario = {
        ...this.formulario,
        [prop]: value
      }
      console.log("Formulario: ", this.formulario)
    }
  },
  render (h) {
    this.clasificar = clasificar.bind(this)
    return (
      <span>
        { uso.map( campo => this.clasificar(h, campo)) }
      </span>
    )
  }
}

function clasificar(h, campo){
  let col = campo.col || 3
  let style = {
    width: 100*(col/8) + "%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "15px"
  }

  let talcual = () => {
    switch(campo.tipo){
      case "texto":
        return <el-input style={{width: "100%"}} value={this.formulario[campo.nombre]} on-change={val => this.sync(campo.nombre, val)}/>
      case "numero":
        return <el-input-number style={{width: "100%"}} value={this.formulario[campo.nombre]} on-change={val => this.sync(campo.nombre, val)}/>
      case "lista":
        return (
          <el-select style={{width: "100%"}} value={this.formulario[campo.nombre]} 
            clearable placeholder="" on-change={val => this.sync(campo.nombre, val)}>
            { campo.opciones.map(op =>
              <el-option
                label={op.etiqueta}
                key={op.nombre}
                value={op.nombre}
              />
            )}
          </el-select>
        )
      case "fecha":
        return <el-date-picker style={{fontFamily: "Helvetica", width: "100%"}} type="date"/>
      case "cotejo":
        let porEtiqueta = campo.opciones.reduce((c,e)=>({...c, [e.etiqueta]: e.nombre}), {})
        let porNombre = campo.opciones.reduce((c,e)=>({...c, [e.nombre]: e.etiqueta}), {})
        this.formulario[campo.nombre] = this.formulario[campo.nombre] || []
        let chop = arr => {
          let actual = this.formulario[campo.nombre]
          let index = arr.indexOf(actual[0])
          if(actual.length && index > -1) return arr.splice(index, 1) && arr
          else return arr
        }
        return (
          <el-checkbox-group style={{width: "100%"}} value={(this.formulario[campo.nombre]).map(e => porNombre[e])}
            on-input={val => this.sync(campo.nombre, chop(val.map(e => porEtiqueta[e]))) } size="small">
            { campo.opciones.map( op =>
              <el-checkbox label={op.etiqueta} border></el-checkbox>
            )}
          </el-checkbox-group>
        )
      case "hora":
        return <el-time-select style={{width: "100%"}} />
    }
  }

  return (
    <div {...{style}}>
      <label>{campo.etiqueta}</label>
      { talcual() }
    </div>
  )
}

let uso = [
  {
    etiqueta: "CTC",
    nombre: "ctc",
    tipo: "lista",
    col: 5,
    opciones: [
      { etiqueta: "La Barquita", nombre: "barquita" },
      { etiqueta: "Jimaní", nombre: "jimani" }
    ]
  },
  {
    etiqueta: "Fecha",
    nombre: "fecha",
    tipo: "fecha",
    col: 3
  },
  {
    etiqueta: "Nombre(s)",
    nombre: "nombre",
    tipo: "texto",
    col: 2
  },
  {
    etiqueta: "Apellido(s)",
    nombre: "apellido",
    tipo: "texto",
    col: 2
  },
  {
    etiqueta: "Sexo",
    nombre: "sexo",
    tipo: "cotejo",
    col: 2,
    opciones: [
      { etiqueta: "F", nombre: "f" },
      { etiqueta: "M", nombre: "m" }
    ]
  },
  {
    etiqueta: "Edad",
    nombre: "edad",
    tipo: "numero",
    col: 2
  },
  {
    etiqueta: "Nivel de Instrucción",
    nombre: "nivel",
    tipo: "lista",
    col: 8,
    opciones: [
      { etiqueta: "Primaria", nombre: "primaria" },
      { etiqueta: "Estudiante Universitario", nombre: "universitario" },
      { etiqueta: "Técnico", nombre: "tecnico" },
      { etiqueta: "Profesional", nombre: "profesional" }
    ],
    adicional: true
  },
  {
    etiqueta: "Zona o Comunidad",
    nombre: "zona",
    tipo: "texto",
    col: 4
  },
  {
    etiqueta: "Hora de entrada",
    nombre: "horaEntrada",
    tipo: "hora",
    col: 2
  },
  {
    etiqueta: "Hora de salida",
    nombre: "horaSalida",
    tipo: "hora",
    col: 2
  },
  {
    etiqueta: "Identidad Electronica",
    nombre: "identidad",
    tipo: "texto",
    col: 8
  },
  {
    etiqueta: "Indique el espacio Maker solicitado y su uso",
    nombre: "espacio",
    tipo: "lista",
    col: 8,
    expandible: true,
    opciones: [
      { 
        nombre: "Producción digital",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Desarrollo de software", nombre: "desarrolloSoftware" },
          { etiqueta: "Diseño y modelado de producto", nombre: "diseñoModelado" },
          { etiqueta: "Creación de aplicaciones moviles", nombre: "aplicacionesMoviles" },
          { etiqueta: "Creación de página Web", nombre: "paginaWeb" },
          { etiqueta: "Acceso a Información de base tecnológica", nombre: "accesoInfoTec" },
          { etiqueta: "Creación de diseño grafico", nombre: "diseñoGrafico" },
          { etiqueta: "Ceación de video juego", nombre: "videoJuego" },
          { etiqueta: "Edición de video", nombre: "edicionVideo" }
        ]
      },
      {
        nombre: "Fabricación digital",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Maquinado de piezas", nombre: "maquinadoPiezas" },
          { etiqueta: "Construcción de prototipos mecánicos inteligentes", nombre: "consProt" },
          { etiqueta: "Imprensión 3D", nombre: "impresion3d" },
          { etiqueta: "Ensamblaje de circuitos", nombre: "ensamCir" },
        ]
      },
      {
        nombre: "Workshop",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Construcción de Maqueta", nombre: "maqueta" },
          { etiqueta: "Trabajos de Carpintería", nombre: "carpinteria" }
        ]
      },
      {
        nombre: "Coworking",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Formulación de proyectos", nombre: "proyectos" },
          { etiqueta: "Generación de ideas", nombre: "ideas" },
          { etiqueta: "Realización de Teletrabjo", nombre: "teletrabajo" }
        ]
      },
      {
        nombre: "Estudio de Fotografía",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Sesión fotográfica", nombre: "sesion" },
          { etiqueta: "Fotografía de productos", nombre: "productos" },
          { etiqueta: "Retoque Fotográfico", nombre: "retoque" }
        ]
      },
      {
        nombre: "Estudio de grabación",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Grabación de audio", nombre: "grabacion" },
          { etiqueta: "Producción Músical", nombre: "producción" }
        ]
      }
      
    ]
  },
  {
    etiqueta: "Evaluación del servicio",
    tipo: "sub"
  },
  {
    etiqueta: "¿Le ha sido util el espacio para lo que necesitaba realizar?",
    nombre: "evaluación",
    tipo: "cotejo",
    col: 8,
    opciones: [
      { etiqueta: "Si", nombre: "si" },
      { etiqueta: "No", nombre: "no" }
    ]
  }
]
