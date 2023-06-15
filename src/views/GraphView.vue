<template>
    <div ref="graph"></div>
</template>

<script>
import ForceGraph3D from '3d-force-graph';
export default {
    name: "GraphView",
    data() {
        return {
            nodes: [],
            edges: [],
            graph: null
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
             const N = 300
            this.nodes = [...Array(N).keys()].map(i => ({ id: i }))
            this.links = [...Array(N).keys()]
                .filter(id => id)
                .map(id => ({
                    source: id,
                    target: Math.round(Math.random() * (id - 1))
                }))
            const gData = {
                nodes: this.nodes,
                links: this.links
            };

            this.graph = ForceGraph3D()(this.$refs.graph)
                .graphData(gData);
        }
    }
}
</script>

<style scoped></style>