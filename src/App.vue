<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Vuetify Todo App
          </v-list-item-title>
          <v-list-item-subtitle>
            Manage your tasks!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon color="teal lighten-1">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark src="cover.jpg" height="150">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="container pa-0 mt-1">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search-component />
        </v-row>

        <v-row class="ml-0">
          <v-app-bar-title class="text-h4">Vuetify Todo</v-app-bar-title>
        </v-row>

        <v-row class="ml-0 mb-1">
          <live-date-time />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar-component />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    'snackbar-component': require('@/components/Shared/Snackbar.vue').default,
    'search-component': require('@/components/Tools/Search.vue').default,
    'live-date-time': require('@/components/Tools/LiveDateTime.vue').default,
  },
  data: () => ({
    drawer: null,
    items: [
      { title: 'Todo App', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
    ],
  }),
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
