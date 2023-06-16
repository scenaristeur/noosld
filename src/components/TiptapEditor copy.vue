<template>
    <div> 
        <div className="editor">
            edit
            <!-- <MenuBar editor={editor} /> -->
            <EditorContent :editor="editor" />
            fin edit
        </div>
    </div>
</template>

<script>
//https://tiptap.dev/installation/vue3#3-create-a-new-component
// https://syncedstore.org/docs/advanced/richtext
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { y_store, webrtcProvider } from "@/y_store";
// import { SyncedText } from "@syncedstore/core";
import * as Y from 'yjs'

const colors = ["#958DF1", "#F98181", "#FBBC88", "#FAF594", "#70CFF8", "#94FADB", "#B9F18D"];
const names = ["Lea Thompson", "Cyndi Lauper", "Tom Cruise", "Madonna"];

const getRandomElement = (list) => list[Math.floor(Math.random() * list.length)];
const getRandomColor = () => getRandomElement(colors);
const getRandomName = () => getRandomElement(names);


export default {
    name: "TiptapEditor",
    components: {
        EditorContent
    },
    data() {
        return {
            editor: null,
            y_store
        }
    },
    methods: {
        test() {
            console.log(this.current.id)
            let y_todo = this.y_store.todos.find(t => t.id == this.current.id)
            console.log(y_todo)
        },
        initEditor() {
            // let y_todo = this.y_store.todos.find(t => t.id == this.current.id)
            // console.log(y_todo.toJSON())
            if (this.current != null) {
                console.log("------------",this.y_store.todos)
                console.log("------------",this.y_store.todos.toJSON())
                console.log("------------",this.y_store.todos.keys())
                let y_todo = this.y_store.todos.find(t => t.id  == this.current.id)
                if(y_todo.truc == undefined){
                    y_todo.truc = new Y.Doc()
                }
                console.

            this.editor = new Editor({
                content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
                extensions: [
                    StarterKit,
                    Placeholder.configure({
                        placeholder: "Write something …",
                    }),
                    Collaboration.configure({
                        document: y_todo.truc,
                    }),
                    CollaborationCursor.configure({
                        provider: webrtcProvider,
                        user: { name: getRandomName(), color: getRandomColor() },
                    }),
                ],
            })

            console.log("editor", this.editor)
        }
    }

    },
    mounted() {

    },
    watch: {
        current() {
            console.log(this.current)
            if (this.current != null) {
                console.log("------------",this.y_store.todos)
                console.log("------------",this.y_store.todos.toJSON())
                console.log("------------",this.y_store.todos.keys())
                let y_todo = this.y_store.todos.find(t => t.id  == this.current.id)
                console.log(y_todo)
                y_todo.machin=Date.now()
                this.initEditor()
            } else {
                console.log('current is null')
            }
            // this.test()
             this.initEditor()
        }
    },
    computed: {
        // current() {
        //   return this.$store.state.core.current
        // },
        current() {
            return this.$store.state.core.current
        }
    }

    //     const MenuBar = ({ editor }) => {
    //   if (!editor) {
    //     return null;
    //   }

    //   return (
    //     <>
    //       <button
    //         onClick={() => editor.chain().focus().toggleBold().run()}
    //         className={editor.isActive("bold") ? "is-active" : ""}
    //       >
    //         bold
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleItalic().run()}
    //         className={editor.isActive("italic") ? "is-active" : ""}
    //       >
    //         italic
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleStrike().run()}
    //         className={editor.isActive("strike") ? "is-active" : ""}
    //       >
    //         strike
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleCode().run()}
    //         className={editor.isActive("code") ? "is-active" : ""}
    //       >
    //         code
    //       </button>
    //       <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>clear marks</button>
    //       <button onClick={() => editor.chain().focus().clearNodes().run()}>clear nodes</button>
    //       <button
    //         onClick={() => editor.chain().focus().setParagraph().run()}
    //         className={editor.isActive("paragraph") ? "is-active" : ""}
    //       >
    //         paragraph
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
    //         className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
    //       >
    //         h1
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
    //         className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
    //       >
    //         h2
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
    //         className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
    //       >
    //         h3
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
    //         className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
    //       >
    //         h4
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
    //         className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
    //       >
    //         h5
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
    //         className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
    //       >
    //         h6
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleBulletList().run()}
    //         className={editor.isActive("bulletList") ? "is-active" : ""}
    //       >
    //         bullet list
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleOrderedList().run()}
    //         className={editor.isActive("orderedList") ? "is-active" : ""}
    //       >
    //         ordered list
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleCodeBlock().run()}
    //         className={editor.isActive("codeBlock") ? "is-active" : ""}
    //       >
    //         code block
    //       </button>
    //       <button
    //         onClick={() => editor.chain().focus().toggleBlockquote().run()}
    //         className={editor.isActive("blockquote") ? "is-active" : ""}
    //       >
    //         blockquote
    //       </button>
    //       <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>horizontal rule</button>
    //       <button onClick={() => editor.chain().focus().setHardBreak().run()}>hard break</button>
    //       <button onClick={() => editor.chain().focus().undo().run()}>undo</button>
    //       <button onClick={() => editor.chain().focus().redo().run()}>redo</button>
    //     </>
    //   );
}
</script>

<style scoped></style>