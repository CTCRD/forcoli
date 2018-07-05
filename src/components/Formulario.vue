<script>
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
    return (
      <div style={{ margin: "15px", width: "calc(100% - 30px)", display: "flex", alignItems: "center", flexDirection: "column", minWidth: "700px", maxWidth: "1200px"}}>
        { dividir(h, uso, clasificar.bind(this)) }
        <el-button style={{marginTop: "10px"}} type="success" icon="el-icon-check" circle></el-button>
      </div>
    )
  }
}

function dividir (h, campos, clasificar){
  let padres = [], hijos = [], contador = 0
  let asignar = () => {
    contador = 0
    padres.push( <div class="fila"> {hijos} </div> )
    hijos = []
  }
  campos.forEach((campo, i) =>{
    if(contador + (campo.col || 3) > 8) asignar()
    contador += (campo.col || 3)
    let salida = clasificar(h, campo)
    if(typeof salida == "array") {
      hijos.push(salida[0])
      campos.splice(i+1, 0, salida[1])
    }
    else hijos.push(salida)
    if(i == campos.length-1) asignar()
  })
  return padres 
}

function clasificar(h, campo, adicional){
  let col = campo.col || 3  
  let style = {
    width: "calc(" + 100*(col/8) + "% - 10px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }

  let talcual = campo => {
    switch(campo.tipo){
      case "texto":
        return <el-input style={{width: "100%"}} value={this.formulario[campo.nombre]} on-change={val => this.sync(campo.nombre, val)}/>
      case "numero":
        return <el-input-number style={{width: "100%"}} value={this.formulario[campo.nombre]} on-change={val => this.sync(campo.nombre, val)}/>
      case "lista":
        let adicional = null
        if(campo.expandible && this.formulario[campo.nombre]){
          let opcion = campo.opciones.filter(el => el.nombre == this.formulario[campo.nombre])[0]
          let campoAdicional = {
            etiqueta: campo.expandible.etiqueta,
            nombre: campo.expandible.nombre,
            tipo: opcion.tipo,
            opciones: opcion.opciones     
          }
          adicional = construir(campoAdicional)
        }
        return [(
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
        ), adicional]
      case "fecha":
        return <el-date-picker 
                  on-input={val => this.sync(campo.nombre, val)}
                  format={"dd-MM-yyyy"}
                  value={this.formulario[campo.nombre]} 
                  style={{fontFamily: "Helvetica", width: "100%"}} 
                  type="date"
                />
      case "cotejo":
        let porEtiqueta = campo.opciones.reduce((c,e)=>({...c, [e.etiqueta]: e.nombre}), {})
        let porNombre = campo.opciones.reduce((c,e)=>({...c, [e.nombre]: e.etiqueta}), {})
        let munOpciones = campo.opciones.length
        this.formulario[campo.nombre] = this.formulario[campo.nombre] || []
        let chop = arr => {
          let actual = this.formulario[campo.nombre]
          let index = arr.indexOf(actual[0])
          if(actual.length && index > -1) return arr.splice(index, 1) && arr
          else return arr
        }
        return (
          <el-checkbox-group style={{width: "100%"}} value={(this.formulario[campo.nombre]).map(e => porNombre[e])}
            size={"big"} on-input={val => this.sync(campo.nombre, chop(val.map(e => porEtiqueta[e]))) }>
            { campo.opciones.map( op =>
              <el-checkbox style={{width: "calc(" + 100/munOpciones + "% - " + 10*(munOpciones-1)/munOpciones+ "px"}} 
                label={op.etiqueta} border />
            )}
          </el-checkbox-group>
        )
      case "hora":
        return <el-time-picker
                  on-input={val => this.sync(campo.nombre, val)}
                  value={this.formulario[campo.nombre]}
                  format={"h:mm A"}
                  picker-options={{format: "h:mm A"}}
                  style={{width: "100%"}}
                />
      default:
        return null
    }
  }

  let construir = campo =>(
    <div {...{style}}>
      <label>{campo.etiqueta}</label>
      { talcual(campo) }
    </div>
  )

  return construir(campo)
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
    col: 4,
    opciones: [
      { etiqueta: "Primario", nombre: "primaria" },
      { etiqueta: "Universitario", nombre: "universitario" },
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
    etiqueta: "Identidad Electronica",
    nombre: "identidad",
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
    etiqueta: "Indique el espacio Maker solicitado",
    nombre: "espacio",
    tipo: "lista",
    col: 8,
    expandible: {etiqueta: "Uso", nombre: "uso"},
    opciones: [
      { 
        etiqueta: "Producción digital",
        nombre: "produccion",
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
        etiqueta: "Fabricación digital",
        nombre: "fabricacion",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Maquinado de piezas", nombre: "maquinadoPiezas" },
          { etiqueta: "Construcción de prototipos mecánicos inteligentes", nombre: "prototipado" },
          { etiqueta: "Imprensión 3D", nombre: "impresion3d" },
          { etiqueta: "Ensamblaje de circuitos", nombre: "circuitos" },
        ]
      },
      {
        etiqueta: "Workshop",
        nombre: "workshop",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Construcción de Maqueta", nombre: "maqueta" },
          { etiqueta: "Trabajos de Carpintería", nombre: "carpinteria" }
        ]
      },
      {
        etiqueta: "Coworking",
        nombre: "coworking",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Formulación de proyectos", nombre: "proyectos" },
          { etiqueta: "Generación de ideas", nombre: "ideas" },
          { etiqueta: "Realización de Teletrabjo", nombre: "teletrabajo" }
        ]
      },
      {
        etiqueta: "Estudio de fotografía",
        nombre: "fotografia",
        tipo: "lista",
        multiple: true,
        opciones: [
          { etiqueta: "Sesión fotográfica", nombre: "sesion" },
          { etiqueta: "Fotografía de productos", nombre: "productos" },
          { etiqueta: "Retoque Fotográfico", nombre: "retoque" }
        ]
      },
      {
        etiqueta: "Estudio de grabación",
        nombre: "grabacion",
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
    nombre: "evaluacion",
    tipo: "cotejo",
    col: 8,
    opciones: [
      { etiqueta: "Si", nombre: "si" },
      { etiqueta: "No", nombre: "no" }
    ]
  }
]
</script>

<style lang="scss">
.fila{
  width: 80%;
  display: flex;
  margin-top: 15px;
  > div{
    margin: 0 5px;
  }
}
</style>
