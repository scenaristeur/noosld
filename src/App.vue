<template>
  <main id="app">
    <NavBar />
    user : {{ user }}
    <!-- current : {{ current }} -->
    <TodoHistory />
    <GraphView />

    <div id="menu">
      <!-- <button id="table">mode input typehead</button>
      <button id="sphere">mode input basic dropdown</button> -->
      <!-- <button id="helix">HELIX</button>
      <button id="grid">GRID</button> -->
      <button @click="show = !show">NOOS</button>
      <!-- <b-dropdown v-model="show" text="Dropdown Button">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown> -->


    </div>
    <b-offcanvas v-model="show" bodyScrolling="true" :title="y_store.todos.length + ' noos'">
      <TodoList />
    </b-offcanvas>

    <TodoModal />
    <!-- <div v-if="debug">
      current : {{ current }} n
      {{ currentModal }}
    </div> -->
  </main>
</template>

<script>

import { y_store } from "@/y_store";
// import { store } from "@/store";
//import { ref } from "vue";
import * as Vue from "vue";
import { enableVueBindings, /*observeDeep, getYjsValue*/ } from "@syncedstore/core";

import NavBar from '@/components/NavBar.vue'
import GraphView from '@/views/GraphView.vue'
import TodoList from '@/components/TodoList.vue'
import TodoHistory from '@/components/TodoHistory.vue'
import TodoModal from '@/components/TodoModal.vue'


// make SyncedStore use Vuejs internally
enableVueBindings(Vue);

export default {
  name: "App",
  components: {
    NavBar,
    // TodoInput,
    TodoList,
    GraphView,
    TodoHistory,
    TodoModal,
  },
  data() {
    return {
      show: false,
      y_store
      // todoModalShow: false,
      // debug: false,
      // updatedText: ''
    }
  },


  computed: {
    // current() {
    //   return this.$store.state.core.current
    // },
    user() {
      return this.$store.state.core.user
    }
  }
  // data() {
  //   return {
  //     store, // Put the store on the data() of the component
  //     newTodo: ""
  //   };
  // },
  // created() {
  //   observeDeep(this.y_store.todos, this.changed)
  // },

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

a {
  color: #8ff;
}

#menu {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

.element {
  width: 120px;
  height: 160px;
  box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.5);
  border: 1px solid rgba(127, 255, 255, 0.25);
  font-family: Helvetica, sans-serif;
  text-align: center;
  line-height: normal;
  cursor: default;
}

.element:hover {
  box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.75);
  border: 1px solid rgba(127, 255, 255, 0.75);
}

.element .number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 12px;
  color: rgba(127, 255, 255, 0.75);
}

.element .symbol {
  position: absolute;
  top: 40px;
  left: 0px;
  right: 0px;
  font-size: 60px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);
}

.element .details {
  position: absolute;
  bottom: 15px;
  left: 0px;
  right: 0px;
  font-size: 12px;
  color: rgba(127, 255, 255, 0.75);
}

button {
  color: rgba(127, 255, 255, 0.75);
  background: transparent;
  outline: 1px solid rgba(127, 255, 255, 0.75);
  border: 0px;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: rgba(0, 255, 255, 0.5);
}

button:active {
  color: #000000;
  background-color: rgba(0, 255, 255, 0.75);
}

blockquote {
  background: #eee;
  border-radius: 5px;
  margin: 16px 0;
}

blockquote p {
  padding: 15px;
}
</style>
