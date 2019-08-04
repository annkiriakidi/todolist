<template>
  <v-container fluid grid-list-md pa-2>

	<v-card
    class="mx-auto"
    max-width="344"
    outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4" > # {{todo.id}}</div>
        <v-list-item-title class="headline mb-1">{{todo.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-switch
        v-model="todo.completed"
        color="indigo darken-3"
        hide-details>
      </v-switch>
      <v-btn text small color="error" @click="removeTask">Delete</v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>

<script>
export default {

  name: 'OneItem',
  props: ["todo"],
  
  methods: {
    removeTask: function() {
      this.$emit("removeTodo", this.todo)
    }
  }
}
</script>
