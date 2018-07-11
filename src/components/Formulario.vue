<script>
export default {
  props: ['campos'],
  data: () => ({
    formulario: {}
  }),
  methods: {
    sync (campo, value) {
      if(campo.expandible){
        this.formulario[campo.expandible.nombre] = ""
      }
      this.formulario = {
        ...this.formulario,
        [campo.nombre]: value
      }
      console.log("Formulario: ", this.formulario)
    }
  },
  render (h) {
    return (
      <div style={{ margin: "15px", width: "calc(100% - 30px)", display: "flex", alignItems: "center", flexDirection: "column", minWidth: "700px", maxWidth: "1200px"}}>
        { dividir.bind(this)(h, this.campos, clasificar.bind(this)) }
        <el-button style={{marginTop: "10px"}} type="success" icon="el-icon-check" circle></el-button>
      </div>
    )
  }
}

function dividir (h, campos, clasificar){
  let that = this
  let campos_copia = campos.reduce(function build(actual, campo){
    actual.push(campo)
    if(campo.expandible && that.formulario[campo.nombre]){
      let opcion = campo.opciones.filter(el => el.nombre == that.formulario[campo.nombre])[0]
      let campoAdicional = {
        etiqueta: campo.expandible.etiqueta,
        nombre: campo.expandible.nombre,
        tipo: opcion.tipo,
        col: opcion.col,
        opciones: opcion.opciones     
      }
      build(actual, campoAdicional)
    }
    return actual
  },[])
  let padres = [], hijos = [], contador = 0
  let asignar = () => {
    contador = 0
    padres.push( <div class="fila"> {hijos} </div> )
    hijos = []
  }
  while(campos_copia.length){
    let campo_actual = campos_copia.shift()
    if(contador + (campo_actual.col || 3) > 8) asignar()
    contador += (campo_actual.col || 3)
    hijos.push(clasificar(h, campo_actual))
    !campos_copia.length && asignar()
  }
  return padres 
}

function clasificar(h, ogCampo){
  let col = ogCampo.col || 3

  let style = {
    width: "calc(" + 100*(col/8) + "% - 10px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }

  let talcual = campo => {
    switch(campo.tipo){
      case "texto":
        return <el-input style={{width: "100%"}} value={this.formulario[campo.nombre]} on-change={val => this.sync(campo, val)}/>
      case "numero":
        return <el-input-number style={{width: "100%"}} value={this.formulario[campo.nombre]} on-change={val => this.sync(campo, val)}/>
      case "lista":
        return (
          <el-select style={{width: "100%"}} value={this.formulario[campo.nombre]} 
            clearable placeholder="" on-change={val => this.sync(campo, val)}>
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
        return (
          <el-date-picker 
            on-input={val => this.sync(campo, val)}
            format={"dd-MM-yyyy"}
            value={this.formulario[campo.nombre]} 
            style={{fontFamily: "Helvetica", width: "100%"}} 
            type="date"
          />
        )
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
            size={"big"} on-input={val => this.sync(campo, chop(val.map(e => porEtiqueta[e]))) }>
            { campo.opciones.map( op =>
              <el-checkbox style={{width: "calc(" + 100/munOpciones + "% - " + 10*(munOpciones-1)/munOpciones+ "px"}} 
                label={op.etiqueta} border />
            )}
          </el-checkbox-group>
        )
      case "hora":
        return (
          <el-time-picker
            on-input={val => this.sync(campo, val)}
            value={this.formulario[campo.nombre]}
            format={"h:mm A"}
            picker-options={{format: "h:mm A"}}
            style={{width: "100%"}}
          />
        )
      default:
        return null
    }
  }

  return (
    <div {...{style}}>
      <label>{ogCampo.etiqueta}</label>
      { talcual(ogCampo) }
    </div>
  )
}
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
