<template>
  <div>
    <div v-if="keytext.length > 0">
      <template v-if="keytext != 'All'">
        <h2 class="text-center mt-3">
          Personajes {{ param }}: <i>{{ keytext }}</i>
        </h2>
      </template>
      <template v-else>
        <h2 class="text-center mt-3">
          Todos los personaes de Rick And Morty
        </h2>
      </template>
    </div>

    <div v-if="nameCharacter.length > 0">
      <h2 class="text-center mt-3">
        Nombre del personaje: <i>"{{ nameCharacter }}"</i>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
    props: ['keytext', 'param', 'nameCharacter']
}
</script>
