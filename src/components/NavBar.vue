<template>
    <b-navbar toggleable="lg" type="dark" variant="light">
      <b-navbar-brand>
<TodoInput/>
      </b-navbar-brand>


        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <h2>NoosLd</h2>
        
          <b-navbar-nav>
         
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="me-auto mb-2 mb-lg-0">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#" disabled>EN</b-dropdown-item>
              <b-dropdown-item href="#" disabled>ES</b-dropdown-item>
              <b-dropdown-item href="#" disabled>RU</b-dropdown-item>
              <b-dropdown-item href="#" disabled>FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#" disabled>Profile</b-dropdown-item>
              <b-dropdown-item href="#" disabled>Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>


            <b-nav-item-dropdown text="more" right>
              <b-dropdown-item href="#" disabled>help</b-dropdown-item>
              <b-dropdown-item href="https://github.com/scenaristeur/noosld" target="_blank">
                bUiLd yOUr oWN oPEnsouRCe NoosLd</b-dropdown-item>
            </b-nav-item-dropdown>


          </b-navbar-nav>
          <b-nav-form class="d-flex">
            
           
            <b-button type="submit" variant="outline-success">Discret mode</b-button>
          </b-nav-form>
        </b-collapse>
      </b-navbar>

</template>

<script>
import TodoInput from '@/components/TodoInput.vue'



export default {
    name: "NavBar",
    components: {
  TodoInput,

  
  },

}
</script>

<style scoped></style>