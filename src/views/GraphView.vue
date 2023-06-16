<template>
    <div ref="graph"></div>
</template>

<script>
import ForceGraph3D from '3d-force-graph';
import { y_store } from "@/y_store/index.js";
import { observeDeep, /*getYjsValue*/ } from "@syncedstore/core";
import * as elementResizeDetectorMaker from "element-resize-detector";

export default {
    name: "GraphView",
    data() {
        return {
            y_store,
            nodes: [],
            links: [],
            graph: null
        }
    },
    mounted() {
        this.init()
        observeDeep(this.y_store.todos, this.changed)
    },
    methods: {
        init() {
            let todos = this.y_store.todos.toJSON()
            console.log(todos)

            //const N = todos.length
            this.nodes = todos //[...Array(N).keys()].map(i => ({ id: i }))
            // this.links = [...Array(N).keys()]
            //     .filter(id => id)
            //     .map(id => ({
            //         source: id,
            //         target: Math.round(Math.random() * (id - 1))
            //     }))

            this.graph = ForceGraph3D()(this.$refs.graph)
                //.graphData(this.gData)
                .backgroundColor("#0B0B61")
               .height(window.innerHeight - 64)
                // .height(this.$refs.graph.element.parent.height)
                .onNodeClick(node => this.focus(node))
                .nodeAutoColorBy('completed')

            this.graph.graphData({ nodes: this.nodes, links: this.links })

            elementResizeDetectorMaker().listenTo(
                this.$refs.graph,
                el => {
                    this.graph.width(el.offsetWidth)
                    this.graph.height(el.offsetHeight)
                }
            );
        },
        changed(data) {
            console.log("foreach", data)
            console.log("entries", data.entries())
            console.log("entries", data.every(e => {
                console.log(e)
            }))
            console.log(data[0].target.toJSON())
            console.log(data[0].transaction)
            // console.log(data[0].transaction.changed.entries().forEach(change => {
            //     console.log(change)
            // }))
            console.log(data[0].transaction.changed.entries())
            let iterator1 = data[0].transaction.changed.entries()
            console.log(iterator1.next().value)

            console.log("must just update, not the position")

            let last = data[0].target.toJSON()
            console.log(Array.isArray(last), last)
            if (Array.isArray(last)) {
                last.forEach(element => {
                    console.log(element)
                    let node_exist = this.nodes.find(({ id }) => id === element.id);
                    console.log("exist", node_exist)
                    if (node_exist != undefined) {
                        node_exist = { ...node_exist, ...element }
                    } else {
                        this.nodes.push(element)
                    }
                });

                this.nodes.forEach(node => {
                    let present = last.find(({ id }) => id === node.id)
                    if (present == undefined) {
                        this.links = this.links.filter(l => l.source !== node && l.target !== node); // Remove links attached to node
                        this.nodes = this.nodes.filter(n => n.id != node.id); // Remove node
                    }
                })
            } else {
                //update one march pô
                let node_exist = this.nodes.find(({ id }) => id === last.id);
                let merged = { ...node_exist, ...last }
                node_exist = merged
            }


            //             const elem = array.find(({name}) => name==='fgh');
            // if (elem) elem.price = "40";
            // console.log(array);



            // this.nodes = [this.nodes, ...data[0].target.toJSON()]
            this.graph.graphData({ nodes: this.nodes, links: this.links })


            //   let v = getYjsValue(data[0].transaction.changed.entries())
            //   console.log("v", v)
            // iterator1.forEach(function(value, key, map){
            //   console.log(`m[${key}] = ${value}`);
            //   console.log(map)
            // })
        },
        focus(node) {
            console.log(node)

            // Aim at node from outside it
            const distance = 40;
            const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

            const newPos = node.x || node.y || node.z
                ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
                : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)
            this.graph.cameraPosition(newPos, node, 3000)
            // this.grapĥ.cameraPosition(
            //     newPos, // new position
            //     node, // lookAt ({ x, y, z })
            //     3000  // ms transition duration
            // );
        }
    }
}
</script>

<style scoped></style>