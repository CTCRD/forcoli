<template>
    <formulario v-bind:campos="campos" ></formulario>
</template>

<script>
import formulario from '@/components/Formulario.vue'

export default {
  data: () => ({
    campos: normalizar(campos)
  }),
  components: {
    formulario
  }
}

function normalizar(campos){
  let camposCopia = JSON.parse(JSON.stringify(campos))
  return camposCopia.map(campo => nombreCampo(campo))

  function nombreCampo(campo){
    let nombre = campo.etiqueta.replace(/[^a-zA-z\s]/g, '').toLowerCase().split(' ').map((el, i) => 
      i > 0 ? el.charAt(0).toUpperCase() + el.substring(1, el.length) : el
    ).join('')
    campo.nombre = nombre
    if(campo.expandible) nombreCampo(campo.expandible)
    if(['lista', 'cotejo'].includes(campo.tipo)) 
      campo.opciones = campo.opciones.map(opcion => nombreCampo(opcion))
    return campo
  }
}


let campos = [
  {
    etiqueta: "CTC",
    tipo: "lista",
    col: 5,
    opciones: [
      { etiqueta: "La Barquita" },
      { etiqueta: "Jimaní" }
    ]
  },
  {
    etiqueta: "Fecha",
    tipo: "fecha",
    col: 3
  },
  {
    etiqueta: "Nombre(s)",
    tipo: "texto",
    col: 2
  },
  {
    etiqueta: "Apellido(s)",
    tipo: "texto",
    col: 2
  },
  {
    etiqueta: "Sexo",
    tipo: "cotejo",
    col: 2,
    opciones: [
      { etiqueta: "F" },
      { etiqueta: "M" }
    ]
  },
  {
    etiqueta: "Edad",
    tipo: "numero",
    col: 2
  },
  {
    etiqueta: "Nivel de Instrucción",
    tipo: "lista",
    col: 4,
    opciones: [
      { etiqueta: "Primario" },
      { etiqueta: "Universitario" },
      { etiqueta: "Técnico" },
      { etiqueta: "Profesional" }
    ]
  },
  {
    etiqueta: "Zona o Comunidad",
    tipo: "texto",
    col: 4
  },
  {
    etiqueta: "Identidad Electronica",
    tipo: "texto",
    col: 4
  },
  {
    etiqueta: "Hora de entrada",
    tipo: "hora",
    col: 2
  },
  {
    etiqueta: "Hora de salida",
    tipo: "hora",
    col: 2
  },
  {
    etiqueta: "Indique el espacio Maker solicitado",
    tipo: "lista",
    col: 8,
    expandible: { etiqueta: "Uso" },
    opciones: [
      { 
        etiqueta: "Producción digital",
        tipo: "lista",
        col: 8,
        multiple: true,
        opciones: [
          { etiqueta: "Desarrollo de software" },
          { etiqueta: "Diseño y modelado de producto" },
          { etiqueta: "Creación de aplicaciones moviles" },
          { etiqueta: "Creación de página Web" },
          { etiqueta: "Acceso a Información de base tecnológica" },
          { etiqueta: "Creación de diseño grafico" },
          { etiqueta: "Ceación de video juego" },
          { etiqueta: "Edición de video" }
        ]
      },
      {
        etiqueta: "Fabricación digital",
        tipo: "lista",
        col: 8,
        multiple: true,
        opciones: [
          { etiqueta: "Maquinado de piezas" },
          { etiqueta: "Construcción de prototipos mecánicos inteligentes" },
          { etiqueta: "Imprensión 3D" },
          { etiqueta: "Ensamblaje de circuitos" },
        ]
      },
      {
        etiqueta: "Workshop",
        tipo: "lista",
        col: 8,
        multiple: true,
        opciones: [
          { etiqueta: "Construcción de Maqueta" },
          { etiqueta: "Trabajos de Carpintería" }
        ]
      },
      {
        etiqueta: "Coworking",
        tipo: "lista",
        col: 8,
        multiple: true,
        opciones: [
          { etiqueta: "Formulación de proyectos" },
          { etiqueta: "Generación de ideas" },
          { etiqueta: "Realización de Teletrabjo" }
        ]
      },
      {
        etiqueta: "Estudio de fotografía",
        tipo: "lista",
        col: 8,
        multiple: true,
        opciones: [
          { etiqueta: "Sesión fotográfica" },
          { etiqueta: "Fotografía de productos" },
          { etiqueta: "Retoque Fotográfico" }
        ]
      },
      {
        etiqueta: "Estudio de grabación",
        tipo: "lista",
        col: 8,
        multiple: true,
        opciones: [
          { etiqueta: "Grabación de audio" },
          { etiqueta: "Producción Músical" }
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
    tipo: "cotejo",
    col: 8,
    opciones: [
      { etiqueta: "Si" },
      { etiqueta: "No" }
    ]
  }
]
</script>
