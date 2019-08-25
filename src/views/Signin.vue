<template>
	<v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Sign in</v-toolbar-title>
                
              </v-toolbar>
              <v-card-text>
                <v-alert type="warning" :value="error">
                    {{error}}
                </v-alert>
                <v-form>
                  <v-text-field
                    label="E-mail"
                    name="email"
                    prepend-icon="person"
                    type="email"
                    required
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    required
                    v-model="password"
                    @click.enter="signin"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signin" :disabled="processing">Sign in</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  name: 'Signin',
  data(){
    return {
        login: null,
        password: null
    }
  },
  computed: {
    error(){
      return this.$store.getters.getError
    },
    processing(){
      return this.$store.getters.getProcessing
    },
    isUserAuthenticated(){
    	console.log(this.$store.getters.isUserAuthenticated)
    	return this.$store.getters.isUserAuthenticated
    }
  },
  watch:{
    isUserAuthenticated(val){
    	console.log(val)
        if(val)
           this.$router.push("/signin") // не перебрасывает на страницу
    }
  },
  methods:{
    signin(){
       this.$store.dispatch('SIGNIN', {email: this.email, password: this.password})
       console.log(this.isUserAuthenticated)
    }
  }
}
</script>

<style lang="css" scoped>
	
</style>