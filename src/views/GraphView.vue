<template>
    <div ref="graph"></div>
</template>

<script>
import ForceGraph3D from '3d-force-graph';
import { y_store, } from "@/y_store/index.js";
// import { areSame } from "@syncedstore/core";
import { observeDeep, /*getYjsValue*/ } from "@syncedstore/core";
import * as elementResizeDetectorMaker from "element-resize-detector";
import SpriteText from 'three-spritetext';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import md5 from 'md5-hash'

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

            let graph = this.graph = ForceGraph3D({
                extraRenderers: [new CSS2DRenderer()]
            })(this.$refs.graph)
                .nodeId(['@id'])
                .nodeLabel('ve:name')
                .nodeVal('ve:val')
                //.graphData(this.gData)
                .backgroundColor("#0B0B61")
                .height(window.innerHeight - 64)
                .nodeThreeObject(node => {
                    const nodeEl = document.createElement('div');
                    nodeEl.textContent = node['ve:name']
                    nodeEl.style.color = "#cccccc" //"node.color";
                    nodeEl.className = 'node-label';
                    return new CSS2DObject(nodeEl);
                })
                .nodeThreeObjectExtend(true)
                // .height(this.$refs.graph.element.parent.height)
                .onNodeClick(node => this.focus(node))
                .nodeAutoColorBy('ve:group')
                .linkDirectionalArrowLength(3.5)
                .linkDirectionalArrowRelPos(1)
                .linkCurvature(0.25).linkThreeObjectExtend(true)
                .linkThreeObject(link => {
                    // extend link with text sprite
                    const sprite = new SpriteText(`${link.name}`);
                    sprite.color = 'lightgrey';
                    sprite.textHeight = 1.5;
                    return sprite;
                })
                .linkPositionUpdate((sprite, { start, end }) => {
                    const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
                        [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
                    })))

                    // Position sprite
                    Object.assign(sprite.position, middlePos);
                })

            this.graph.graphData({ nodes: this.nodes, links: this.links })

            elementResizeDetectorMaker().listenTo(
                this.$refs.graph,
                el => {
                    this.graph.width(el.offsetWidth)
                    //this.graph.height(window.innerHeight - 64)
                }
            );


            function reportWindowSize() {
                //   heightOutput.textContent = window.innerHeight;
                //   widthOutput.textContent = window.innerWidth;
                graph.height(window.innerHeight - 64) //64
            }

            window.onresize = reportWindowSize;
        },
        changed(data) {
            // see syncedstore api https://syncedstore.org/docs/api/
            console.log("CHANGED", data)
            let todos = this.y_store.todos.toJSON()
            console.log(todos)
            todos.forEach(t => {
                // let id = t['@id']
                let props = t['ve:properties']
                let node_exist = this.nodes.find((node) => node['@id'] === t['@id']);
                //   console.log("exist", node_exist)
                if (node_exist != undefined) {
                    // console.log("are same ? ", areSame(node_exist, t))
                    node_exist = { ...node_exist, ...t }
                    //  console.log("node update", node_exist)
                } else {
                    // console.log("node creation ", t)
                    this.nodes.push(t)
                }
                // console.log(props)
                props.forEach(p => {
                    //  console.log(p)
                    //  let name = p.name
                    p.values.forEach(v => {
                        //     console.log(name, v)

                        switch (v.type) {
                            case "node":
                                this.nodeLinkIfNotExist(t, p, v)
                                break;
                            case "textarea":
                                this.textAreaIfNotExist(t, p, v)
                                break;
                            case "link":
                                this.webLinkIfNotExist(t, p, v)
                                break;
                            default:
                                console.log("not managed yet : ", v.type, t, p, v)
                                break;
                        }
                    })
                })
            })
            this.graph.graphData({ nodes: this.nodes, links: this.links })
        },
        nodeLinkIfNotExist(t, p, v) { // todo, prop, value
            let link = { source: t['@id'], target: v['@id'], name: p.name }
            // console.log("new link", link)
            // ??????????????
            // cette ligne donne moins de liens 
            // console.log("compare", l.source['@id'] ,link.source['@id'] ,l.target['@id'] , link.target['@id'], l.name == link.name)
            //let link_exist = this.links.find((l) => l.source['@id'] == link.source['@id'] && l.target['@id'] == link.target['@id'] && l.name == link.name);
            // que cette ligne ? 
            let link_exist = this.links.find((l) => l.source == link.source && l.target == link.target && l.name == link.name);
            //console.log("link exist ?", link_exist)
            if (link_exist == undefined) {
                this.links.push(link)
                //  console.log("links", this.links)
            }
        },
        textAreaIfNotExist(t, p, v) {
            // console.log("TEXTAREA", t, p, v)
            let text = v.value
            let id = md5(text)
            let node_exist = this.nodes.find((node) => node['@id'] === id);
            if (node_exist == undefined) {
                let node = { '@id': id, 've:text': text, 've:name': text.substring(0, 10) + '...', 've:group': 'text' }
                this.nodes.push(node)
            }
            let link = { source: t['@id'], target: id, name: p.name }
            let link_exist = this.links.find((l) => l.source == link.source && l.target == link.target && l.name == link.name);
            //console.log("link exist ?", link_exist)
            if (link_exist == undefined) {
                this.links.push(link)
                //  console.log("links", this.links)
            }

        },
        webLinkIfNotExist(t, p, v) {
            //  console.log("WEBLINK", t, p, v)
            let value = v.value
            let name = value.name
            let href = value.href
            let id = md5(href)
            let node = { '@id': id, 've:name': name, 've:href': href, 've:group': "weblink" }
            let node_exist = this.nodes.find((n) => n['@id'] === node['@id']);
            if (node_exist == undefined) {
                this.nodes.push(node)
            }
            let link = { source: t['@id'], target: id, name: p.name }
            let link_exist = this.links.find((l) => l.source == link.source && l.target == link.target && l.name == link.name);
            //console.log("link exist ?", link_exist)
            if (link_exist == undefined) {
                this.links.push(link)
                //  console.log("links", this.links)
            }
        },












        changed1(data) {
            console.log("CHANGED", data)
            // console.log("entries", data.entries())
            // console.log("entries", data.every(e => {
            //     console.log(e)
            // }))
            // console.log(data[0].target.toJSON())
            // console.log(data[0].transaction)
            // console.log(data[0].transaction.changed.entries().forEach(change => {
            //     console.log(change)
            // }))
            // console.log(data[0].transaction.changed.entries())
            // let iterator1 = data[0].transaction.changed.entries()
            // console.log(iterator1.next().value)

            // console.log("must just update, not the position")

            let last = data[0].target.toJSON()
            // console.log(Array.isArray(last), last)
            if (Array.isArray(last)) {
                last.forEach(element => {
                    console.log(element)
                    let node_exist = this.nodes.find((node) => node['@id'] === element['@id']);
                    //   console.log("exist", node_exist)
                    if (node_exist != undefined) {
                        console.log("exist", node_exist)
                        node_exist = { ...node_exist, ...element }
                    } else {
                        console.log("not exist", element)
                        this.nodes.push(element)
                    }
                    if (element['ve:properties'] != undefined) {


                        let properties = element['ve:properties']
                        // console.log("properties", properties)
                        properties.forEach(p => {
                            let name = p.name
                            let values = p.values
                            values.forEach(v => {
                                if (v.type == 'node') {
                                    let link = { source: element['@id'], target: v['@id'], name: name }
                                    console.log("Link", link)
                                    this.links.push(link)
                                }
                            })
                        })

                    }



                });

                this.nodes.forEach(node => {
                    let present = last.find((node) => node['@id'] === node['@id']);
                    if (present == undefined) {
                        this.links = this.links.filter(l => l.source !== node && l.target !== node); // Remove links attached to node
                        this.nodes = this.nodes.filter(n => n['@id'] != node['@id']); // Remove node
                    }
                })
            } else {
                //update one march pô
                let node_exist = this.nodes.find((node) => node['@id'] === last['@id']);
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
            this.$store.commit('core/setCurrent', node)
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
.node-label {
    font-size: 12px;
    padding: 1px 4px;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.5);
    user-select: none;
  }
<style scoped></style>