<template>
  <div v-if="currentTemp != null">
    <hr>
    <b-row v-for="p in currentTemp['ve:properties']" :key="p.name">
      <b-col sm="3">
        <label for="name"><code>{{ p.name }}</code>:</label>
      </b-col>
      <b-col sm="9">

        <!-- <b-button-toolbar key-nav aria-label="Toolbar with button groups">
              <b-dropdown size="sm" class="mx-1" right text="+" variant="outline-primary">
              <b-dropdown-item @click="fieldType = 'text'">Text</b-dropdown-item>
              <b-dropdown-item @click="fieldType = 'textarea'">Textarea</b-dropdown-item>
              <b-dropdown-item @click="fieldType = 'currentTemp'">currentTemp</b-dropdown-item>
              <b-dropdown-item @click="fieldType = 'link'">Link</b-dropdown-item>
            </b-dropdown>
    
          </b-button-toolbar> -->
        <b-button @click="showFieldModal(p)" variant="outline-primary">+</b-button>
        <!-- {{ p.values}} -->

        <ValuesComponent :values="p.values" />

        <!-- <b-form-input id="name" v-model="currentTemp.name" required /> -->
      </b-col>
    </b-row>

    <b-row v-if="field != null" class="mt-3">
      <b-col sm="3">
        <b-form-input v-model="field.name" autofocus autocomplete="off" required placeholder="property name"
          @keyup.enter="fieldNameChanged" />


      </b-col>
      <b-col sm="9">
        <b-button variant="outline-secondary" size="sm" @click="clear_field">X</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
      </b-col>
      <b-col>
        <b-button variant="outline-primary" size="sm" @click="add">+ add a property or a link</b-button>
      </b-col>
    </b-row>
    <b-button variant="success" @click="save">Save currentTemp</b-button>





    <b-modal v-model="fieldModal" size="xl" :title="currentTemp['ve:name'] + ' -> ' + currentProp.name" @ok="addValue">
      <!-- {{ currentProp}} -->
      <b-tabs content-class="mt-3">
        <b-tab title="text" @click="fieldType = 'textarea'">
          <b-form-textarea v-model="newvalue" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
        </b-tab>
        <b-tab title="node" @click="fieldType = 'node'">
          <NodeSelector :currentProp="currentProp" />
        </b-tab>
        <b-tab title="link" @click="fieldType = 'link'">
          <b-form-input v-model="link.name" placeholder="name" />
          <b-form-input v-model="link.href" placeholder="link" />
        </b-tab>
        <!-- <b-tab title="tiny" @click="fieldType = 'tiny'">
  
        <editor
  
        v-model="tinycontent"
        :init="{
        height: 500,
        menubar: false,
        plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
        'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help'
      }"
      />
    </b-tab> -->
      </b-tabs>
    </b-modal>

    <hr>
    {{ currentTemp['ve:properties'] }}
    <hr>

    {{ currentTemp }}

    <hr>

  </div>
</template>

<script>
import ValuesComponent from '@/components/ValuesComponent.vue'
import NodeSelector from '@/components/NodeSelector.vue'
export default {
  name: "PropertyManager",
  components: {
    ValuesComponent,
    NodeSelector
  },
  data() {
    return {
      currentTemp: null,
      field: null,
      clearing: false,
      fieldModal: false,
      currentProp: {},
      link: {},
      newvalue: null,
      fieldType: "text"
    }
  },
  methods: {
    addValue() {
      console.log("current prop", this.currentProp, this.currentProp.name)
      console.log("Add value", this.newvalue, this.link, this.currentProp)
      // newvalue
      if (this.newvalue != null) {
        let val = { value: this.newvalue, type: 'textarea' }
        console.log("addNewValue", val)
        this.currentProp.values.push(val)
        this.newvalue = null
      }

      //link
      if (this.link.href != undefined) {
        this.link.name == undefined ? this.link.name = this.link.href : "p"
        let val = { value: this.link, type: 'link' }
        this.currentProp.values.push(val)
        this.link = {}
      }

      // node


    },
    add() {
      this.field = { name: "" }
    },
    fieldNameChanged() {
      console.log(this.field.name)
      //  let field_name = this.$refs.fieldNameInput.value
      if (this.clearing == false) {
        let p = { name: this.field.name, values: [] }
        console.log("prop", p)
        this.currentTemp['ve:properties'] == undefined ? this.currentTemp['ve:properties'] = [] : ""
        var index = this.currentTemp['ve:properties'].findIndex(x => x.name == p.name);
        index === -1 ? this.currentTemp['ve:properties'].push(p) : alert(p.name + " already exist")
      }
      this.field = null
    },
    clear_field() {
      this.clearing = true
      this.field = null
      this.clearing = false
    },
    showFieldModal(p) {
      console.log(p)
      this.fieldType = "text"
      this.currentProp = p
      this.fieldModal = true
    },
    // addNewValue() {

    //   let val = { value: this.newvalue, type: this.fieldType }
    //   console.log("addNewValue", val)
    //   this.currentProp.values.push(val)
    //   this.newvalue = null
    // },
    // addNewLink() {
    //   //console.log(this.link)
    //   let val = { value: this.link, type: this.fieldType }
    //   this.currentProp.values.push(val)
    //   this.link = {}
    // },
    async save() {
      await this.$store.dispatch('nodes/saveNode', this.node);
      this.$store.commit('nodes/setCurrentNode', null)
      this.$router.push('/');
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
  }
}
</script>

<style scoped></style>