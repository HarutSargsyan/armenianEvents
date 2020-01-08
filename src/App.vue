<template>
  <v-app>
    <v-app-bar
      fixed
      dark
      app
      color="purple darken-4"
      
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="hidden-sm-and-down display-2 font-weight-thin">Armenian Events</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-slide-x-reverse-transition> <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            label="Search"
            v-if="show"
          ></v-text-field></v-slide-x-reverse-transition>
         
          <v-icon color="white" @click="show=!show">mdi-magnify</v-icon>
      <template v-slot:extension>
        <v-tabs align-with-title background-color="transparent" class="hidden-sm-and-down">
          <v-tab color="purple darken-4" to="/">Home</v-tab>
          <v-tab color="purple darken-4" to="/about">About</v-tab>
          <v-tab color="purple darken-4" to="/events">Events</v-tab>
          <v-tab color="purple darken-4" to="/login">Login</v-tab>
          <v-tab color="purple darken-4" to="/submit">Submit</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer disable-resize-watcher class="hidden-md-and-up" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Armenian Events
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item @click="$router.push('/');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/about');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/events');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Events</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/login');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/submit');drawer=false">
          <v-list-item-action>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Submit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content class="pl=0">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer
    app
    dark
    absolute
    padless
  >
     <v-row no-gutters>
      <v-col cols="12">
    <v-card
      flat
      tile
      class=" purple darken-4 white--text text-center"
    >
 
        <v-card-text>
          <v-btn 
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.Hi there we are an enthusiastic team from Tumo.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
      </v-col>
      </v-row>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
  name: "App",
  data: () => ({
    show:false,
    drawer: false,
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    search: null
  })
};
</script>
