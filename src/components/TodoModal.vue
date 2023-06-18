<template>
    <b-modal size="xl" @ok="updateNode" v-model="currentModal"
        :title="currentTemp['ve:group'] + '/' + currentTemp['ve:name']">
        <TiptapEditor />
        <PropertyManager :todo="currentTemp" />
        [links] [commentaires persos]

        <!-- <LinkManager /> -->
        <div class="mt-2">Val /size : {{ currentTemp['ve:val'] }}</div> <b-form-input v-model="currentTemp['ve:val']"
            type="range" min="1" max="100" step="1"></b-form-input>
        <!--   <hr>
        link to [[ links ]] / add link
        <hr>
        {{ currentTemp }} -->
    </b-modal>
</template>

<script>
import { y_store } from "@/y_store/index.js";
import TiptapEditor from '@/components/TiptapEditor.vue'
// import LinkManager from '@/components/LinkManager.vue'
import PropertyManager from '@/components/PropertyManager.vue'

export default {
    name: "TodoModal",
    components: {
        TiptapEditor,
        // LinkManager,
        PropertyManager
    },
    data() {
        return {
            currentTemp: { name: "NoosLd, explore les idées des autres et partage les tiennes ! or should show last" }, // annonce au démarrage
            y_store,
            currentModal: false
        }
    },
    methods: {
        updateNode() {
            // console.log(this.$refs.editableText.innerText)
            // let text = this.$refs.editableText.innerText.trim()

            // console.log(this.currentTemp)
            // //this.$store.commit('core/updateNode', this.currentTemp)
            // console.log(this.y_store.todos.toJSON())
            // let y_todo = this.y_store.todos.find(t => t.id == this.currentTemp.id)
            // console.log("y_todo", y_todo)
            // if (text.length > 0 && text != y_todo.text) {
            //     y_todo.text = text
            // }
            // console.log(this.y_store.todos.toJSON())
            this.currentModal = false

        },

    },
    watch: {
        currentTemp() {
            delete this.currentTemp.__threeObj
            this.currentModal = this.current != null
        },
        current() {
            console.log(this.current)
            this.currentTemp = { ...this.current }
        }
    },
    computed: {
        current() {
            return this.$store.state.core.current
        },
        user() {
            return this.$store.state.core.user
        }
    }
}
</script>

<style scoped></style>