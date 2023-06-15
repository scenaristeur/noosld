<template>
  <main id="app">
    <h1>Noosphere</h1>
    <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo"
      @keyup.enter="addTodo" />
    <ul class="todo-list">
      <li v-for="todo in Array.from(store.todos).reverse()" class="todo" :key="todo.id">
        <div class="view">
          <label>
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            {{ todo.name }}
          </label>
          <button class="destroy" @click="removeTodo(todo)">X</button><br>
          <small><i>{{ since(todo.created) }}</i></small>
        </div>
      </li>
    </ul>
    <GraphView />
  </main>
</template>

<script>
import { store } from "@/store";
//import { ref } from "vue";
import * as Vue from "vue";
import { enableVueBindings, /*observeDeep, getYjsValue*/ } from "@syncedstore/core";
import { v4 as uuidv4 } from 'uuid';
import GraphView from '@/views/GraphView.vue'

// make SyncedStore use Vuejs internally
enableVueBindings(Vue);

export default {
  name: "App",
  components: {
    GraphView
  },
  data() {
    return {
      store, // Put the store on the data() of the component
      newTodo: ""
    };
  },
  // created() {
  //   observeDeep(this.store.todos, this.changed)
  // },
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
    removeTodo(todo) {
      this.store.todos.splice(this.store.todos.indexOf(todo), 1);
    },
    since(value) {
      // const array = getYjsValue(this.store.todos);
      // console.log(array)
      return this.secondsToHms((new Date() - new Date(value)) / 1000)
    },
    secondsToHms(d) {
      d = Number(d);
      var a = Math.floor(d / 31557600);
      var m = Math.floor(d / 2592000);
      var j = Math.floor(d / 86400);
      var h = Math.floor(d / 3600);
      var min = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);

      // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      var display = ''
      display = a > 0 ? a + 'a' : m > 0 ? m + 'm' : j > 0 ? j + 'j' : h > 0 ? h + 'h' : min > 0 ? min + 'min' : s + 's'
      return display//hDisplay + mDisplay + sDisplay;
    },

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  text-align: left;
}

li button {
  margin-left: 1em;
}

.todo-list {
  z-index: 100;
  top: 0;
  position: absolute;
  background-color: antiquewhite;
  list-style-type: none;
  padding-left: 0px;
}
</style>
