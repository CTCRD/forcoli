<template>
  <div id="contenido">
    <div id="formulario-lista">
      <span v-for="formulario in formularios" :key="formulario.id">
        {{ formulario.nombre }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=>({
    formularios: formularios
  })
}

let formularios = [
  {
    nombre: "Uso de espacio",
    id: "1",
    campos: [
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
        expandible: { etiqueta: "Uso", nombre: "uso" },
        opciones: [
          { 
            etiqueta: "Producción digital",
            nombre: "produccion",
            tipo: "lista",
            col: 8,
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
            col: 8,
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
            col: 8,
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
            col: 8,
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
            col: 8,
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
            col: 8,
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
        tipo: "sub",
        col: 8
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

  }
]

</script>

<style scoped lang="scss">
  #contenido{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #formulario-lista{
    width: 80%;
    padding-top: 50px;
    > span{
      width: 300px;
      padding: 10px 0;
      border: 1px solid gray;
    }
    > span:not(:last-child){
      border-bottom: none;
    }
  }
</style>
