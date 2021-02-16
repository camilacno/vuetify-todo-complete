<template>
  <v-text-field
    :value="$store.state.searchText"
    @input="$store.commit('setSearchText', $event)"
    class="mt-1 expanding-search"
    :class="{ 'close-search': searchClosed && !$store.state.searchText }"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    :disabled="$store.state.sorting"
    placeholder="Search"
    filled
    dense
    clearable
    prepend-inner-icon="mdi-magnify"
    hide-details
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      searchClosed: true,
    };
  },
};
</script>

<style>
.expanding-search {
  transition: max-width 0.5s;
}

.close-search {
  max-width: 45px !important;
}

.theme--dark.v-text-field > .v-input__control > .v-input__slot::before {
  border-color: transparent !important;
}

.theme--dark.v-text-field > .v-input__control > .v-input__slot::after {
  color: transparent !important;
}

.expanding-search.theme--dark.v-text-field
  > .v-input__control
  > .v-input__slot {
  background: transparent !important;
  cursor: pointer !important;
}

.expanding-search.v-input--is-focused.theme--dark.v-text-field
  > .v-input__control
  > .v-input__slot {
  background: rgba(255, 255, 255, 0.2) !important;
}
</style>
