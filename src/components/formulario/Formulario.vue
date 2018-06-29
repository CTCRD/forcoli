<template>
  
</template>

<script>
export default {
  
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
    tipo: "texto"
  },
  {
    nombre: "Hora de entrada",
    tipo: "hora"
  },
  {
    nombre: "Hora de salida",
    tipo: "hora",
  },
  {
    nombre: "Identidad Electronica",
    tipo: "texto"
  },
  {
    nombre: "Indique el espacio Maker solicitado y su uso",
    tipo: "lista",
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
]
</script>

<style lang="scss">

</style>
