<template>
  <v-app>
    <v-content>
      <AppHeader/>
      <AppForm :todo="todo"  @addTodo="addTodo"/>
      <v-conteiner grid-list-md fluid>
        <v-layout wrap align-content-center align-center justify-start>
        <v-flex xs2 v-for="todo in todos" :key="todo.id">
      <OneItem 
        :todo="todo"
        :complited="todo.complited"
        @removeTodo="removeTodo"/>
      </v-flex>

        </v-layout>
      </v-conteiner>
    <AppFooter/>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppForm from './components/AppForm';
import OneItem from './components/OneItem';
import AppFooter from './components/AppFooter';


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

export default {
  name: 'App',
  components: {
    AppHeader,
    OneItem,
    AppFooter,
    AppForm,
  },
  
  data() {
    return{
        todos: todoStorage.fetch(),
        todo: "",
    }
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
      var value = todo && todo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false,
      });
      todo = " ";
    },

    removeTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
};
</script>
