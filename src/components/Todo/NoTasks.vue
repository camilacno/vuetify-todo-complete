<template>
  <div class="no-tasks">
    <v-icon color="teal lighten-1" size="100">
      mdi-check
    </v-icon>
    <div class="text-h4 teal--text">Up to date!</div>
  </div>
</template>

<style>
.no-tasks {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
}

.no-tasks i {
  width: 100%;
  align-self: center;
}
</style>
