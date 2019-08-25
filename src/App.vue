<template>
  <v-app>
    <v-content>
      <AppHeader/>
      
        <router-view/>

    <AppFooter/>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
export default {
  name: 'Tasks',
  components: {
    AppHeader,
    AppFooter
  },
}
</script>