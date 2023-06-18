<template>
    <div>
        <!--
                  :itemProjection="itemProjectionFunction"
             @selectItem="selectItemEventHandler"
              @onInput="onInputEventHandler"
            @onFocus="onFocusEventHandler"
             @onBlur="onBlurEventHandler"
              selectOnTab="false"
               v-model="newTodo"
            @keyup.enter="addTodo"
        -->
        <SimpleTypeahead id="typeahead_id" autofocus placeholder="link to ..." :itemProjection="itemProjectionFunction"
            :items="Array.from(y_store.todos).reverse()" :minInputLength="1">
            <template #list-header>
                <div class="simple-typeahead-list-header">[use as subject]</div>
            </template>
            <template #list-item-text="slot"><span v-html="slot.boldMatchText(slot.itemProjection(slot.item))"></span>
            </template>
            <template #list-footer>
                as object
            </template>

        </SimpleTypeahead>
    </div>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid';
import { y_store } from "@/y_store/index.js";
import SimpleTypeahead from 'vue3-simple-typeahead';

import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; //Optional default CSS

export default {
    name: "TodoTypehead",
    components: {
        SimpleTypeahead,
    },
    data() {
        return {
            y_store, // Put the store on the data() of the component
            newTodo: "",
            typehead: false
        }
    },
    methods: {
        itemProjectionFunction(i) {
            return i['ve:name']
        }
    }
}
</script>

<style scoped></style>