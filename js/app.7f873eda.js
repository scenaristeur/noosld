(function(){"use strict";var e={2101:function(e,t,o){var r={};o.r(r),o.d(r,{xC:function(){return p}});var n=o(9197),i=o(8473),a=o(4887);const s={id:"app"},l={id:"menu"};function d(e,t,o,r,n,d){const c=(0,i.up)("NavBar"),u=(0,i.up)("TodoHistory"),h=(0,i.up)("GraphView"),m=(0,i.up)("TodoList"),p=(0,i.up)("b-offcanvas"),v=(0,i.up)("TodoModal");return(0,i.wg)(),(0,i.iD)("main",s,[(0,i.Wm)(c),(0,i.Uk)(" user : "+(0,a.zw)(d.user)+" ",1),(0,i.Wm)(u),(0,i.Wm)(h),(0,i._)("div",l,[(0,i._)("button",{onClick:t[0]||(t[0]=e=>n.show=!n.show)},"NOOS")]),(0,i.Wm)(p,{modelValue:n.show,"onUpdate:modelValue":t[1]||(t[1]=e=>n.show=e),bodyScrolling:"true",title:n.y_store.todos.length+" noos"},{default:(0,i.w5)((()=>[(0,i.Wm)(m)])),_:1},8,["modelValue","title"]),(0,i.Wm)(v)])}var c=o(2179),u=o(8363),h=o(3696),m=o(2993);const p=(0,c.wI)({todos:[],fragment:"xml"}),v=(0,c.ms)(p),g=(new u.x$("noosld",v),new h.H7("noosld",v),new m.VU("wss://yjs-leveldb.glitch.me/noosphere","noosld",v)),f=g.awareness;f.on("change",(e=>{console.log(e),console.log("Awareness",Array.from(f.getStates().values()))})),f.setLocalStateField("user",{name:"Emmanuelle Charpentier",color:"#ffb61e"});var k=o(3702);const b=(0,i._)("h2",null,"NoosLd",-1),w=(0,i._)("em",null,"User",-1);function y(e,t,o,r,n,a){const s=(0,i.up)("TodoInput"),l=(0,i.up)("b-navbar-brand"),d=(0,i.up)("b-navbar-toggle"),c=(0,i.up)("b-nav-item"),u=(0,i.up)("b-navbar-nav"),h=(0,i.up)("b-dropdown-item"),m=(0,i.up)("b-nav-item-dropdown"),p=(0,i.up)("b-button"),v=(0,i.up)("b-nav-form"),g=(0,i.up)("b-collapse"),f=(0,i.up)("b-navbar");return(0,i.wg)(),(0,i.j4)(f,{toggleable:"lg",type:"dark",variant:"light"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1}),(0,i.Wm)(d,{target:"nav-collapse"}),(0,i.Wm)(g,{id:"nav-collapse","is-nav":""},{default:(0,i.w5)((()=>[b,(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{href:"#"},{default:(0,i.w5)((()=>[(0,i.Uk)("Link")])),_:1}),(0,i.Wm)(c,{href:"#",disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)("Disabled")])),_:1})])),_:1}),(0,i.Wm)(u,{class:"me-auto mb-2 mb-lg-0"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{text:"Lang",right:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{href:"#",disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)("EN")])),_:1}),(0,i.Wm)(h,{href:"#",disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)("ES")])),_:1}),(0,i.Wm)(h,{href:"#",disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)("RU")])),_:1}),(0,i.Wm)(h,{href:"#",disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)("FA")])),_:1})])),_:1}),(0,i.Wm)(m,{right:""},{"button-content":(0,i.w5)((()=>[w])),default:(0,i.w5)((()=>[(0,i.Wm)(h,{href:"#",disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)("Profile")])),_:1}),(0,i.Wm)(h,{href:"#",disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)("Sign Out")])),_:1})])),_:1}),(0,i.Wm)(m,{text:"more",right:""},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{href:"#",disabled:""},{default:(0,i.w5)((()=>[(0,i.Uk)("help")])),_:1}),(0,i.Wm)(h,{href:"https://github.com/scenaristeur/noosld",target:"_blank"},{default:(0,i.w5)((()=>[(0,i.Uk)(" bUiLd yOUr oWN oPEnsouRCe NoosLd")])),_:1})])),_:1})])),_:1}),(0,i.Wm)(v,{class:"d-flex"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{type:"submit",variant:"outline-success"},{default:(0,i.w5)((()=>[(0,i.Uk)("Discret mode")])),_:1})])),_:1})])),_:1})])),_:1})}const C=e=>((0,i.dD)("data-v-23acf0d5"),e=e(),(0,i.Cn)(),e),I={style:{display:"flex","flex-direction":":row"}},W=C((()=>(0,i._)("div",{class:"simple-typeahead-list-header"},"[use as subject]",-1))),U=["innerHTML"];function A(e,t,o,r,a,s){const l=(0,i.up)("SimpleTypeahead"),d=(0,i.up)("b-form-input");return(0,i.wg)(),(0,i.iD)("span",I,[1==a.typehead?((0,i.wg)(),(0,i.j4)(l,{key:0,id:"typeahead_id",autofocus:"",placeholder:"What needs to be done? (th)",items:Array.from(a.y_store.todos).reverse().map((e=>e.name)),minInputLength:1,itemProjection:e.itemProjectionFunction,onSelectItem:e.selectItemEventHandler,onOnInput:e.onInputEventHandler,onOnFocus:e.onFocusEventHandler,onOnBlur:e.onBlurEventHandler,selectOnTab:"false",modelValue:a.newTodo,"onUpdate:modelValue":t[0]||(t[0]=e=>a.newTodo=e),onKeyup:(0,n.D2)(s.addTodo,["enter"])},{"list-header":(0,i.w5)((()=>[W])),"list-item-text":(0,i.w5)((e=>[(0,i._)("span",{innerHTML:e.boldMatchText(e.itemProjection(e.item))},null,8,U)])),"list-footer":(0,i.w5)((()=>[(0,i.Uk)(" as object ")])),_:1},8,["items","itemProjection","onSelectItem","onOnInput","onOnFocus","onOnBlur","modelValue","onKeyup"])):((0,i.wg)(),(0,i.j4)(d,{key:1,class:"sm-8 md-4",autofocus:"",autocomplete:"off",placeholder:"What needs to be done?",modelValue:a.newTodo,"onUpdate:modelValue":t[1]||(t[1]=e=>a.newTodo=e),onKeyup:(0,n.D2)(s.addTodo,["enter"])},null,8,["modelValue","onKeyup"]))])}o(7658);var N=o(9241),R=o(8725),T=(o(455),{name:"TodoInput",components:{SimpleTypeahead:R.Z},data(){return{y_store:p,newTodo:"",typehead:!1}},methods:{addTodo(){const e=this.newTodo&&this.newTodo.trim();if(!e)return;let t={"@context":{"@vocab":"https://www.w3.org/ns/activitystreams#",ve:"https://scenaristeur.github.io/verse#",id:"@id",type:"@type"},"@id":(0,N.Z)(),"ve:name":e,"ve:age":0,"ve:privacy":"private","ve:type":"node","ve:group":"todo","ve:properties":[],test:"test vocab","ve:completed":!1,"ve:created":Date.now()};this.y_store.todos.push(t),this.newTodo=""}}}),B=o(5312);const Z=(0,B.Z)(T,[["render",A],["__scopeId","data-v-23acf0d5"]]);var E=Z,z={name:"NavBar",components:{TodoInput:E}};const V=(0,B.Z)(z,[["render",y]]);var x=V;const O={ref:"graph"};function j(e,t,o,r,n,a){return(0,i.wg)(),(0,i.iD)("div",O,null,512)}var M=o(4563),S=o(7024),D={name:"GraphView",data(){return{y_store:p,nodes:[],links:[],graph:null}},mounted(){this.init(),(0,c.QT)(this.y_store.todos,this.changed)},methods:{init(){let e=this.y_store.todos.toJSON();console.log(e),this.nodes=e,this.graph=(0,M.Z)()(this.$refs.graph).nodeId(["@id"]).nodeLabel("ve:name").backgroundColor("#0B0B61").height(window.innerHeight-64).onNodeClick((e=>this.focus(e))).nodeAutoColorBy("ve:completed"),this.graph.graphData({nodes:this.nodes,links:this.links}),S().listenTo(this.$refs.graph,(e=>{this.graph.width(e.offsetWidth),this.graph.height(e.offsetHeight)}))},changed(e){console.log("foreach",e),console.log("entries",e.entries()),console.log("entries",e.every((e=>{console.log(e)}))),console.log(e[0].target.toJSON()),console.log(e[0].transaction),console.log(e[0].transaction.changed.entries());let t=e[0].transaction.changed.entries();console.log(t.next().value),console.log("must just update, not the position");let o=e[0].target.toJSON();if(console.log(Array.isArray(o),o),Array.isArray(o))o.forEach((e=>{console.log(e);let t=this.nodes.find((t=>t["@id"]===e["@id"]));console.log("exist",t),void 0!=t?t={...t,...e}:this.nodes.push(e)})),this.nodes.forEach((e=>{let t=o.find((e=>e["@id"]===e["@id"]));void 0==t&&(this.links=this.links.filter((t=>t.source!==e&&t.target!==e)),this.nodes=this.nodes.filter((t=>t["@id"]!=e["@id"])))}));else{let e=this.nodes.find((e=>e["@id"]===o["@id"])),t={...e,...o};e=t}this.graph.graphData({nodes:this.nodes,links:this.links})},focus(e){console.log(e),this.$store.commit("core/setCurrent",e);const t=40,o=1+t/Math.hypot(e.x,e.y,e.z),r=e.x||e.y||e.z?{x:e.x*o,y:e.y*o,z:e.z*o}:{x:0,y:0,z:t};this.graph.cameraPosition(r,e,3e3)}}};const H=(0,B.Z)(D,[["render",j]]);var P=H;const G={class:"row"},Q={class:"col"},J={class:"col"},L={class:"col"},Y={class:"col"},K={class:"todo-list"},F={class:"view"};function X(e,t,o,r,s,l){const d=(0,i.up)("b-form-checkbox"),c=(0,i.up)("b-button"),u=(0,i.up)("b-list-group-item"),h=(0,i.up)("b-list-group");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Uk)((0,a.zw)(s.y_store.todos.length)+" ",1),(0,i.Wm)(h,{class:"todo-list"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Array.from(s.y_store.todos).reverse(),(o=>((0,i.wg)(),(0,i.j4)(u,{button:"",class:"todo",onClick:e=>l.clickTodo(o),key:o["@id"]},{default:(0,i.w5)((()=>[(0,i._)("div",G,[(0,i._)("div",Q,[(0,i.Wm)(d,{class:"toggle",type:"checkbox",modelValue:o["ve:completed"],"onUpdate:modelValue":e=>o["ve:completed"]=e,onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["stop"]))},null,8,["modelValue","onUpdate:modelValue"])]),(0,i._)("div",J,[(0,i._)("b",null,(0,a.zw)(o["ve:name"]),1)]),(0,i._)("div",L,[s.canRemove?((0,i.wg)(),(0,i.j4)(c,{key:0,size:"sm",onClick:e=>l.removeTodo(o),variant:"outline-warning"},{default:(0,i.w5)((()=>[(0,i.Uk)("X")])),_:2},1032,["onClick"])):(0,i.kq)("",!0),(0,i.Uk)("   "),(0,i._)("small",null,[(0,i._)("i",null,(0,a.zw)(l.since(o["ve:created"])),1)])]),(0,i._)("div",Y,[(0,i.Wm)(d,{class:"toggle",type:"checkbox",modelValue:e.userCheck,"onUpdate:modelValue":t[1]||(t[1]=t=>e.userCheck=t),onClick:t[2]||(t[2]=(0,n.iM)((()=>{}),["stop"])),variant:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)(" me ")])),_:1},8,["modelValue"])])])])),_:2},1032,["onClick"])))),128))])),_:1}),(0,i._)("ul",K,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Array.from(s.y_store.todos).reverse(),(e=>((0,i.wg)(),(0,i.iD)("li",{class:"todo",key:e["@id"]},[(0,i._)("div",F,[(0,i.Wm)(d,{class:"toggle",type:"checkbox",modelValue:e["ve:completed"],"onUpdate:modelValue":t=>e["ve:completed"]=t},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e["ve:name"])+" ",1),s.canRemove?((0,i.wg)(),(0,i.j4)(c,{key:0,size:"sm",onClick:t=>l.removeTodo(e),variant:"outline-warning"},{default:(0,i.w5)((()=>[(0,i.Uk)("X")])),_:2},1032,["onClick"])):(0,i.kq)("",!0),(0,i.Uk)("   "),(0,i._)("small",null,[(0,i._)("i",null,(0,a.zw)(l.since(e["ve:created"])),1)])])),_:2},1032,["modelValue","onUpdate:modelValue"])])])))),128))])])}var q={name:"TodoList",data(){return{y_store:p,canRemove:!0}},methods:{clickTodo(e){console.log(e),this.$store.commit("core/setCurrent",e)},removeTodo(e){this.y_store.todos.splice(this.y_store.todos.indexOf(e),1)},since(e){return this.secondsToHms((new Date-new Date(e))/1e3)},secondsToHms(e){e=Number(e);var t=Math.floor(e/31557600),o=Math.floor(e/2592e3),r=Math.floor(e/86400),n=Math.floor(e/3600),i=Math.floor(e%3600/60),a=Math.floor(e%3600%60),s="";return s=t>0?t+"a":o>0?o+"m":r>0?r+"j":n>0?n+"h":i>0?i+"min":a+"s",s}}};const _=(0,B.Z)(q,[["render",X],["__scopeId","data-v-49f80c3f"]]);var $=_;const ee={key:0,class:"history"},te={key:0};function oe(e,t,o,r,n,s){const l=(0,i.up)("b-list-group-item"),d=(0,i.up)("b-list-group");return s.history.length>0?((0,i.wg)(),(0,i.iD)("div",ee,[(0,i._)("button",{onClick:t[0]||(t[0]=e=>n.showHistory=!n.showHistory),size:"sm"},"history"),n.showHistory?((0,i.wg)(),(0,i.iD)("div",te,[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.history,(e=>((0,i.wg)(),(0,i.j4)(l,{key:e["@id"],title:e["ve:group"],button:"",onClick:t=>s.setCurrent(e),active:e["@id"]==s.current["@id"],variant:"dark",flush:""},{default:(0,i.w5)((()=>[(0,i._)("small",null,(0,a.zw)(e["ve:name"]),1)])),_:2},1032,["title","onClick","active"])))),128))])),_:1}),(0,i.Uk)(" [toolbar] [check move to] [limit 100] ")])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)}var re={name:"TodoHistory",data(){return{showHistory:!0,todos:[]}},methods:{setCurrent(e){console.log(e),this.$store.commit("core/setCurrent",e)}},computed:{history(){return this.$store.state.core.history},current(){return this.$store.state.core.current}}};const ne=(0,B.Z)(re,[["render",oe],["__scopeId","data-v-30b4f60c"]]);var ie=ne;function ae(e,t,o,r,n,a){const s=(0,i.up)("TiptapEditor"),l=(0,i.up)("b-modal");return(0,i.wg)(),(0,i.j4)(l,{size:"xl",onOk:a.updateNode,modelValue:n.currentModal,"onUpdate:modelValue":t[0]||(t[0]=e=>n.currentModal=e),title:n.currentTemp["ve:group"]+"/"+n.currentTemp["ve:name"]},{default:(0,i.w5)((()=>[(0,i.Wm)(s),(0,i.Uk)(" [links] [commentaires persos] ")])),_:1},8,["onOk","modelValue","title"])}const se={key:0,class:"editor"},le={class:"editor__footer"},de={class:"editor__name"};function ce(e,t,o,r,n,s){const l=(0,i.up)("menu-bar"),d=(0,i.up)("editor-content");return n.editor?((0,i.wg)(),(0,i.iD)("div",se,[(0,i.Wm)(l,{class:"editor__header",editor:n.editor},null,8,["editor"]),(0,i.Wm)(d,{class:"editor__content",editor:n.editor},null,8,["editor"]),(0,i._)("div",le,[(0,i._)("div",{class:(0,a.C_)(`editor__status editor__status--${n.status}`)},["connected"===n.status?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,a.zw)(n.editor.storage.collaborationCursor.users.length)+" user"+(0,a.zw)(1===n.editor.storage.collaborationCursor.users.length?"":"s")+" online in "+(0,a.zw)(n.room),1)],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)(" offline ")],64))],2),(0,i._)("div",de,[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>s.setName&&s.setName(...e))},(0,a.zw)(n.currentUser.name),1)])])])):(0,i.kq)("",!0)}var ue=o(1088),he=o(1872),me=o(4917),pe=o(6602),ve=o(1537),ge=o(599),fe=o(7828),ke=o(9972),be=o(6764),we=o(7974);function ye(e,t,o,r,n,a){const s=(0,i.up)("menu-item");return(0,i.wg)(),(0,i.iD)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.items,((e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,["divider"===e.type?((0,i.wg)(),(0,i.iD)("div",{class:"divider",key:`divider${t}`})):((0,i.wg)(),(0,i.j4)(s,(0,i.dG)({key:t},e),null,16))],64)))),256))])}const Ce=["title"],Ie={class:"remix"},We=["xlink:href"];function Ue(e,t,o,r,n,s){return(0,i.wg)(),(0,i.iD)("button",{class:(0,a.C_)(["menu-item",{"is-active":o.isActive?o.isActive():null}]),onClick:t[0]||(t[0]=(...e)=>o.action&&o.action(...e)),title:o.title},[((0,i.wg)(),(0,i.iD)("svg",Ie,[(0,i._)("use",{"xlink:href":`${n.remixiconUrl}#ri-${o.icon}`},null,8,We)]))],10,Ce)}var Ae=o(4727),Ne={props:{icon:{type:String,required:!0},title:{type:String,required:!0},action:{type:Function,required:!0},isActive:{type:Function,default:null}},data(){return{remixiconUrl:Ae}}};const Re=(0,B.Z)(Ne,[["render",Ue]]);var Te=Re,Be={components:{MenuItem:Te},props:{editor:{type:Object,required:!0}},data(){return{items:[{icon:"bold",title:"Bold",action:()=>this.editor.chain().focus().toggleBold().run(),isActive:()=>this.editor.isActive("bold")},{icon:"italic",title:"Italic",action:()=>this.editor.chain().focus().toggleItalic().run(),isActive:()=>this.editor.isActive("italic")},{icon:"strikethrough",title:"Strike",action:()=>this.editor.chain().focus().toggleStrike().run(),isActive:()=>this.editor.isActive("strike")},{icon:"code-view",title:"Code",action:()=>this.editor.chain().focus().toggleCode().run(),isActive:()=>this.editor.isActive("code")},{icon:"mark-pen-line",title:"Highlight",action:()=>this.editor.chain().focus().toggleHighlight().run(),isActive:()=>this.editor.isActive("highlight")},{type:"divider"},{icon:"h-1",title:"Heading 1",action:()=>this.editor.chain().focus().toggleHeading({level:1}).run(),isActive:()=>this.editor.isActive("heading",{level:1})},{icon:"h-2",title:"Heading 2",action:()=>this.editor.chain().focus().toggleHeading({level:2}).run(),isActive:()=>this.editor.isActive("heading",{level:2})},{icon:"paragraph",title:"Paragraph",action:()=>this.editor.chain().focus().setParagraph().run(),isActive:()=>this.editor.isActive("paragraph")},{icon:"list-unordered",title:"Bullet List",action:()=>this.editor.chain().focus().toggleBulletList().run(),isActive:()=>this.editor.isActive("bulletList")},{icon:"list-ordered",title:"Ordered List",action:()=>this.editor.chain().focus().toggleOrderedList().run(),isActive:()=>this.editor.isActive("orderedList")},{icon:"list-check-2",title:"Task List",action:()=>this.editor.chain().focus().toggleTaskList().run(),isActive:()=>this.editor.isActive("taskList")},{icon:"code-box-line",title:"Code Block",action:()=>this.editor.chain().focus().toggleCodeBlock().run(),isActive:()=>this.editor.isActive("codeBlock")},{type:"divider"},{icon:"double-quotes-l",title:"Blockquote",action:()=>this.editor.chain().focus().toggleBlockquote().run(),isActive:()=>this.editor.isActive("blockquote")},{icon:"separator",title:"Horizontal Rule",action:()=>this.editor.chain().focus().setHorizontalRule().run()},{type:"divider"},{icon:"text-wrap",title:"Hard Break",action:()=>this.editor.chain().focus().setHardBreak().run()},{icon:"format-clear",title:"Clear Format",action:()=>this.editor.chain().focus().clearNodes().unsetAllMarks().run()},{type:"divider"},{icon:"arrow-go-back-line",title:"Undo",action:()=>this.editor.chain().focus().undo().run()},{icon:"arrow-go-forward-line",title:"Redo",action:()=>this.editor.chain().focus().redo().run()}]}}};const Ze=(0,B.Z)(Be,[["render",ye]]);var Ee=Ze;const ze=e=>e[Math.floor(Math.random()*e.length)];var Ve={name:"TiptapEditor",components:{EditorContent:be.kg,MenuBar:Ee},data(){return{currentUser:JSON.parse(localStorage.getItem("currentUser"))||{name:this.getRandomName(),color:this.getRandomColor()},provider:null,editor:null,status:"connecting",room:null}},mounted(){},methods:{init(){console.log("init in room",this.room);const e=new we.QW;this.provider=new ue.jg({appId:"7j9y6m10",name:this.room,document:e}),this.provider.on("status",(e=>{this.status=e.status})),this.editor=new be.ML({extensions:[ke.Z.configure({history:!1}),ve.ZP,fe.Z,ge.ZP,me.ZP.configure({document:e}),pe.Z.configure({provider:this.provider,user:this.currentUser}),he.Z.configure({limit:1e4})]}),localStorage.setItem("currentUser",JSON.stringify(this.currentUser))},setName(){const e=(window.prompt("Name")||"").trim().substring(0,32);if(e)return this.updateCurrentUser({name:e})},updateCurrentUser(e){this.currentUser={...this.currentUser,...e},this.editor.chain().focus().updateUser(this.currentUser).run(),localStorage.setItem("currentUser",JSON.stringify(this.currentUser))},getRandomColor(){return ze(["#958DF1","#F98181","#FBBC88","#FAF594","#70CFF8","#94FADB","#B9F18D"])},getRandomName(){return ze(["Lea Thompson","Cyndi Lauper","Tom Cruise","Madonna","Jerry Hall","Joan Collins","Winona Ryder","Christina Applegate","Alyssa Milano","Molly Ringwald","Ally Sheedy","Debbie Harry","Olivia Newton-John","Elton John","Michael J. Fox","Axl Rose","Emilio Estevez","Ralph Macchio","Rob Lowe","Jennifer Grey","Mickey Rourke","John Cusack","Matthew Broderick","Justine Bateman","Lisa Bonet"])}},beforeUnmount(){console.log("unmount"),this.editor.destroy(),this.provider.destroy()},watch:{current(){console.log(this.current["@id"]),this.room=this.current["@id"],null!=this.editor&&(this.editor.destroy(),this.provider.destroy()),this.init()}},computed:{current(){return this.$store.state.core.current}}};const xe=(0,B.Z)(Ve,[["render",ce]]);var Oe=xe,je={name:"TodoModal",components:{TiptapEditor:Oe},data(){return{currentTemp:{name:"NoosLd, explore les idées des autres et partage les tiennes ! or should show last"},y_store:p,currentModal:!1}},methods:{updateNode(){this.currentModal=!1}},watch:{currentTemp(){delete this.currentTemp.__threeObj,this.currentModal=null!=this.current},current(){console.log(this.current),this.currentTemp={...this.current}}},computed:{current(){return this.$store.state.core.current},user(){return this.$store.state.core.user}}};const Me=(0,B.Z)(je,[["render",ae]]);var Se=Me;(0,c.QB)(k);var De={name:"App",components:{NavBar:x,TodoList:$,GraphView:P,TodoHistory:ie,TodoModal:Se},data(){return{show:!1,y_store:p}},computed:{user(){return this.$store.state.core.user}}};const He=(0,B.Z)(De,[["render",d]]);var Pe=He,Ge=o(9427);(0,Ge.z)("/noosld/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("NoosLd has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var Qe=o(4731),Je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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";const Le={class:"home"},Ye=(0,i._)("img",{alt:"Vue logo",src:Je},null,-1);function Ke(e,t,o,r,n,a){const s=(0,i.up)("HelloWorld");return(0,i.wg)(),(0,i.iD)("div",Le,[Ye,(0,i.Wm)(s,{msg:"Welcome to Your Vue.js App"})])}const Fe={class:"hello"},Xe=(0,i.uE)('<p data-v-5d670a26> For a guide and recipes on how to configure / customize this project,<br data-v-5d670a26> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>vue-cli documentation</a>. </p><h3 data-v-5d670a26>Installed CLI Plugins</h3><ul data-v-5d670a26><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5d670a26>babel</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-5d670a26>pwa</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5d670a26>router</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-5d670a26>vuex</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5d670a26>eslint</a></li></ul><h3 data-v-5d670a26>Essential Links</h3><ul data-v-5d670a26><li data-v-5d670a26><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>Core Docs</a></li><li data-v-5d670a26><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>Forum</a></li><li data-v-5d670a26><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>Community Chat</a></li><li data-v-5d670a26><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5d670a26>Twitter</a></li><li data-v-5d670a26><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>News</a></li></ul><h3 data-v-5d670a26>Ecosystem</h3><ul data-v-5d670a26><li data-v-5d670a26><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>vue-router</a></li><li data-v-5d670a26><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>vuex</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5d670a26>vue-devtools</a></li><li data-v-5d670a26><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5d670a26>vue-loader</a></li><li data-v-5d670a26><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5d670a26>awesome-vue</a></li></ul>',7);function qe(e,t,o,r,n,s){return(0,i.wg)(),(0,i.iD)("div",Fe,[(0,i._)("h1",null,(0,a.zw)(o.msg),1),Xe])}var _e={name:"HelloWorld",props:{msg:String}};const $e=(0,B.Z)(_e,[["render",qe],["__scopeId","data-v-5d670a26"]]);var et=$e,tt={name:"HomeView",components:{HelloWorld:et}};const ot=(0,B.Z)(tt,[["render",Ke]]);var rt=ot;const nt=[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,8224))}],it=(0,Qe.p7)({history:(0,Qe.PO)("/noosld/"),routes:nt});var at=it,st=o(299);const lt=()=>({current:null,user:null,history:[]}),dt={setCurrent(e,t){console.log(t),e.current=t,this.commit("core/pushToHistory",t)},setUser(e,t){console.log(t),e.user=t},pushToHistory(e,t){let o=e.history;console.log("avant",o);let r=e.history.filter((e=>e["@id"]!=t["@id"]));console.log("après",r),r.unshift({"@id":t["@id"],"ve:name":t["ve:name"],"ve:group":t["ve:group"]}),e.history=r,console.log(r)},updateNode(e){console.log("todo find node byId and update",e)}},ct={};var ut={namespaced:!0,state:lt,actions:ct,mutations:dt},ht=(0,st.MT)({state:{},getters:{},mutations:{},actions:{},modules:{core:ut}}),mt=o(8396);(0,n.ri)(Pe).use(r["default"]).use(ht).use(at).use(mt.ZP).mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],i=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.2e7dcd4d.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="noosld:";o.l=function(r,n,i,a){if(e[r])e[r].push(n);else{var s,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var h=function(t,o){s.onerror=s.onload=null,clearTimeout(m);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/noosld/"}(),function(){var e={143:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=i);var a=o.p+o.u(t),s=new Error,l=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}};o.l(a,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,a=r[0],s=r[1],l=r[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var c=l(o)}for(t&&t(r);d<a.length;d++)i=a[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},r=self["webpackChunknoosld"]=self["webpackChunknoosld"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2101)}));r=o.O(r)})();
//# sourceMappingURL=app.7f873eda.js.map