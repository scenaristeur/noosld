<template>
    <div class="history" v-if="history.length > 0">
       
        <button @click="showHistory = !showHistory" size="sm">history</button>
        <div v-if="showHistory">
          
            <b-list-group>
                <b-list-group-item v-for="todo in history" :key="todo.id" :title="todo.group" button
                    @click="setCurrent(todo)" :active="todo.id == current.id" variant="dark" flush>
                    <small>{{ todo.name }}</small>
                </b-list-group-item>


            </b-list-group>
            [toolbar] [check move to] [limit 100]
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoHistory",
    data() {
        return {
            showHistory: true,
            todos: []
        }
    },
    methods: {
        setCurrent(todo) {
            console.log(todo)
            this.$store.commit('core/setCurrent', todo)
        }
    },
//     watch:{
// history(){
//     this.todos= this.history.reverse()
// }
//     },
    computed: {
        history() {
            return this.$store.state.core.history
        },
        current() {
            return this.$store.state.core.current
        },
    },

}
</script>

<style scoped>
.history {
    position: absolute;
    right: 0px;
    top: 100px;
    width: 100px;
    z-index: 2;
}

b-list-group-item {
    padding: 0px;
    margin: 0px;
}
</style>