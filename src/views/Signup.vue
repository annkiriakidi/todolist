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
                <v-toolbar-title>Sign up</v-toolbar-title>
                
              </v-toolbar>
              <v-card-text>
                <v-alert type="warning" :value="error">
                    {{error}}
                </v-alert>
                <v-form v-model="valid">
                  <v-text-field
                    label="E-mail"
                    name="email"
                    prepend-icon="person"
                    type="email"
                    required
                    v-model="email"
                    :rules="emailRules"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    required
                    v-model="password"
                    @click.enter="signup"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signup" :disabled="processing || !valid">Sign up</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  name: 'Signup',
  data(){
    return {
        login: null,
        password: null,
        valid: false,

        emailRules: [
        (v) => !!v || 'Пожалуйста введите email',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Неправильный email'
         ],
        passwordRules: [
        (v) => !!v || 'Пожалуйста введите пароль',
        (v) => (v && v.length >= 6) || 'Пароль слишком короткий - минимум 6 символов'
         ]
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
    signup(){
       this.$store.dispatch('SIGNUP', {email: this.email, password: this.password})
    }
  }
}
</script>

<style lang="css" scoped>
	
</style>