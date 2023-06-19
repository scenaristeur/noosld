<template>
    <div>
        {{ y_store.todos.length }}

        <b-list-group class="todo-list">
            <b-list-group-item button v-for="todo in Array.from(y_store.todos).reverse()" class="todo"
                @click="clickTodo(todo)" :key="todo['@id']">
                <div class="row">
                    <div class="col"> <b-form-checkbox class="toggle" type="checkbox" v-model="todo['ve:completed']"
                            @click.stop>
                        </b-form-checkbox>
                    </div>

                    <div class="col"> <b>{{ todo['ve:name'] }}</b></div>
                    <div class="col">
                        <b-button v-if="canRemove" size="sm" @click.stop="removeTodo(todo)"
                            variant="outline-warning">X</b-button> &nbsp;
                    </div>
                    <div class="col"><small><i>{{ since(todo['ve:created']) }}</i></small>
                    </div>
                    <div class="col">

                        <b-form-checkbox class="toggle" type="checkbox" v-model="userCheck[todo['@id']]" @click.stop
                            variant="success">
                            me
                        </b-form-checkbox>
                    </div>
                </div>
            </b-list-group-item>


        </b-list-group>

        <!-- <ul class="todo-list">
            <li v-for="todo in Array.from(y_store.todos).reverse()" class="todo" :key="todo['@id']">
                <div class="view">
                    <b-form-checkbox class="toggle" type="checkbox" v-model="todo['ve:completed']">
                        {{ todo['ve:name'] }}
                        <b-button size="sm" v-if="canRemove" @click.stop="removeTodo(todo)"
                            variant="outline-warning">X</b-button> &nbsp;
                        <small><i>{{ since(todo['ve:created']) }}</i></small>
                    </b-form-checkbox>


                </div>
            </li>
        </ul> -->
    </div>
</template>

<script>
import { y_store } from "@/y_store/index.js";
export default {
    name: "TodoList",
    data() {
        return {
            y_store, // Put the store on the data() of the component
            canRemove: true,
            userCheck: {}
        };
    },
    methods: {
        clickTodo(todo) {
            console.log(todo)
            this.$store.commit('core/setCurrent', todo)
        },
        removeTodo(todo) {
            this.y_store.todos.splice(this.y_store.todos.indexOf(todo), 1);
        },
        since(value) {
            // const array = getYjsValue(this.y_store.todos);
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