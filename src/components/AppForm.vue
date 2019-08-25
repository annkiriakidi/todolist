<template>
  <v-form>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs10 sm6>
          <form >
          <v-text-field label="Enter a task" onsubmit="addTask" v-model="newTodo" clearable></v-text-field>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
    props: ["todo"],
    methods: {
    addTask: function() {
      this.$emit("addTodo", this.newTodo);
    }
  }
};
</script>