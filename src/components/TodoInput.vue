<template>
    <div>
        <!-- <b-form-input class="sm-8 md-4" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo"
            @keyup.enter="addTodo" /> -->

        <!-- <SimpleTypeahead id="typeahead_id" placeholder="Start writing..." :items="['One', 'Two', 'Three']" :minInputLength="1"
            :itemProjection="itemProjectionFunction" @selectItem="selectItemEventHandler" @onInput="onInputEventHandler"
            @onFocus="onFocusEventHandler" @onBlur="onBlurEventHandler">
        </SimpleTypeahead> -->

        <SimpleTypeahead id="typeahead_id" autofocus placeholder="What needs to be done?" :items="Array.from(store.todos).map(x => x.name)" :minInputLength="1"
            :itemProjection="itemProjectionFunction" @selectItem="selectItemEventHandler" @onInput="onInputEventHandler"
            @onFocus="onFocusEventHandler" @onBlur="onBlurEventHandler" v-model="newTodo"
            @keyup.enter="addTodo">
            <template #list-header>
                as subject
            </template>
            <template #list-item-text="slot"><span
                    v-html="slot.boldMatchText(slot.itemProjection(slot.item))"></span></template>
            <template #list-footer>
                as object
            </template>
        </SimpleTypeahead>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { store } from "@/store";
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; //Optional default CSS


export default {
    name: "TodoInput",
    components: {
        SimpleTypeahead,
    },
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