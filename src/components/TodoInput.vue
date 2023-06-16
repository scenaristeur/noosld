<template>
    <b-form-input class="sm-8 md-4" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo"
        @keyup.enter="addTodo" />
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { store } from "@/store";

export default {
    name: "TodoInput",
    data() {
        return {
            store, // Put the store on the data() of the component
            newTodo: ""
        }
    },
    methods: {
        addTodo() {
            const value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }
            this.store.todos.push({
                id: uuidv4(),
                name: value,
                completed: false,
                group: "todo",
                created: Date.now()
            });
            this.newTodo = "";
        },



    },
}
</script>

<style scoped></style>