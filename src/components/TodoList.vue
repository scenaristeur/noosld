<template>
    <div>
        {{ store.todos.length }}

        <b-list-group class="todo-list">
            <b-list-group-item
             v-for="todo in Array.from(store.todos).reverse()" class="todo"
              :key="todo.id">
              <b-form-checkbox class="toggle" type="checkbox" v-model="todo.completed" >
                {{ todo.name }}
                <b-button  size="sm" @click="removeTodo(todo)" variant="outline-warning">X</b-button> &nbsp;
                <small><i>{{ since(todo.created) }}</i></small>
            </b-form-checkbox>
            
            </b-list-group-item>

            
          </b-list-group>

    <ul class="todo-list">
        <li v-for="todo in Array.from(store.todos).reverse()" class="todo" :key="todo.id">
            <div class="view">
                    <b-form-checkbox class="toggle" type="checkbox" v-model="todo.completed" >
                    {{ todo.name }}
                    <b-button  size="sm" @click="removeTodo(todo)" variant="outline-warning">X</b-button> &nbsp;
                    <small><i>{{ since(todo.created) }}</i></small>
                </b-form-checkbox>
          

            </div>
        </li>
    </ul>
</div>
</template>

<script>
import { store } from "@/store";
export default {
    name: "TodoList",
    data() {
        return {
            store, // Put the store on the data() of the component
        };
    },
    methods: {
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
    }
}
</script>

<style scoped>
ul {
    text-align: left;
}

li button {
    margin-left: 1em;
}

 .todo-list {
    background-color: #0B0B61;
    list-style-type: none;
    color: rgba(127, 255, 255, 0.75);

  outline: 1px solid rgba(127, 255, 255, 0.75);
  border: 0px;
  padding: 5px 10px;
  cursor: pointer;
    padding-left: 0px;
} 
</style>