<template>

    <v-content>
      
      <AppForm :todo="todo"  @addTodo="addTodo" v-if="isUserAuthenticated"/>
      <div v-if="errors !== ''" id="errors">{{ errors }}</div>
      <v-conteiner grid-list-md fluid>
        <v-layout wrap align-content-center align-center justify-start >
        <v-flex xs2 v-for="todo in todos" :key="todo.id">
      <OneItem 
        :todo="todo"
        :complited="todo.complited"
        @removeTodo="removeTodo"
         v-if="isUserAuthenticated"/>
      </v-flex>

        </v-layout>
       

      </v-conteiner>
    
    </v-content>

</template>

<script>
import AppForm from '../components/AppForm';
import OneItem from '../components/OneItem'

import { db } from '../main'

const presetValues = [{
  "title":"Task 1",
  "completed":true
}, {
  "title":"Task 2",
  "completed":false
}, {
  "title":"Task 3",
  "completed":false
}]

const STORAGE_KEY = "todo-app";
const todoStorage = {
  fetch: function() {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || presetValues;
    todos.forEach(function(todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

///////////////////////////////////
//export const db = firebase.firestore()


export default {

  name: 'Tasks',
  components: {
    AppForm,
    OneItem
  },
  
  data() {
    return{
        todos: todoStorage.fetch(),
        todo: "",
        errors: ''
    }
  },
  computed:{
    isUserAuthenticated(){
      return this.$store.getters.isUserAuthenticated
    },
  },
  watch: {
    todos: {
      handler: function(todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  },

  methods: {
    addTodo (todo) {
      this.errors = ''

      if (todo !== '') {
      //   var value = todo && todo.trim();
      //   if (!value) {
      //     return;
      //   }
      // this.todos.push({
      //   id: todoStorage.uid++,
      //   title: value,
      //   completed: false,
      // });
      // todo = " ";

      db.collection('tasks').add({
      title: todo,
      //created_at: Date.now()
        }).then((response) => {
          if (response) {
            todo = ''
          }
       }).catch((error) => {
          this.errors = error
       })
      } else {
        this.errors = 'Please enter some text'
      }
      
    },

    removeTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  }
};
</script>
