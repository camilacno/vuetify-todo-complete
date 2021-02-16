<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="$store.state.user.name"
      v-model="drawer"
      :mobile-breakpoint="768"
      app
    >
      <v-img
        class="pa-4"
        src="cover.jpg"
        :height="$route.path === '/' ? '200' : '170'"
      >
        <!-- <v-avatar size="60" class="mb-2">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          Camila Nepomuceno
        </div> -->
        <!-- <div class="white--text text-subtitle-2">camila.cno</div> -->
      </v-img>

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

    <v-app-bar
      app
      color="teal"
      dark
      src="cover.jpg"
      :height="$route.path === '/' ? '200' : '170'"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"
        ></v-img>
      </template>

      <v-container class="container pa-0 mt-1">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search-component />
        </v-row>

        <v-row class="ml-0 mt-0">
          <v-app-bar-title class="text-h5 font-weight-medium">{{
            $store.state.appTitle
          }}</v-app-bar-title>
        </v-row>

        <v-row class="ml-0 mt-0">
          <live-date-time />
        </v-row>

        <v-row class="mt-0" v-if="$route.path === '/'">
          <field-add-task />
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
    'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
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
  mounted() {
    this.$store.dispatch('getTasks');
  },
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0px !important;
}

.v-app-bar-title__content {
  width: 100%;
}
</style>
