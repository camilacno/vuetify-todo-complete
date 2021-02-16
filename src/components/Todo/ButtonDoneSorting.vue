<template>
  <v-btn
    class="button-done-sorting"
    color="teal lighten-1"
    @click="$store.commit('toggleSorting')"
  >
    DONE SORTING
  </v-btn>
</template>

<script>
export default {};
</script>

<style>
.button-done-sorting span {
  color: white;
}

.button-done-sorting {
  position: fixed;
  bottom: 3vh;
  left: 50%;
  transform: translateX(-50%);
}
</style>
