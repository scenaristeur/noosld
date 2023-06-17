<template>
    <div>
        <hr>
        to :
        <hr>
        from:
        <hr>
        <TodoTypehead />
    </div>
</template>

<script>
import TodoTypehead from '@/components/TodoTypehead.vue'
export default {
    name: "LinkManager",
    components: {
        TodoTypehead,
    },
}
</script>

<style scoped></style>