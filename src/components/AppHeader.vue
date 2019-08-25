<template>
	<v-toolbar app dark flat>
    <v-toolbar-title v-text="'To-do list'"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      

      <v-btn v-for="(item, i) in menuItems" :key="menuItems[i].icon" :to="item.route">
        <v-icon left v-html="item.icon"></v-icon>
        {{item.title}}
      </v-btn>

      <v-btn flat @click.prevent="signout" v-if="isUserAuthenticated">
        <v-icon left>exit_to_app</v-icon>
        Log out 
      </v-btn>

      
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppHeader',
  computed:{
    isUserAuthenticated(){
      return this.$store.getters.isUserAuthenticated
    },
    getUserId(){
      return this.$store.getters.getUserId
    },
    menuItems(){
      return this.isUserAuthenticated
        ? [
        {
          icon: 'account_circle',
          title: 'Tasks',
          route: '/tasks'
        }    
        ]:
        [
          {
            icon: 'input',
            title: 'Sign in',
            route: '/signin',
          },
          {
            icon: 'lock_open',
            title: 'Sign up',
            route: '/signup'
          }
        ]
    },
  },
  methods:{
    signout(){
      this.$confirm('Do you really want to log out?').then(() => {
        this.$store.dispatch('SIGNOUT')
      })
      
    }
  }
}
</script>

<style lang="css" scoped>
	
</style>