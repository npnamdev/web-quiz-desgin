<template>
  <b-modal v-model="modalShow">
    <template #header>
      <h1 class="form-title">Form Add</h1>
      <font-awesome-icon
        class="icon-close"
        icon="fa-solid fa-xmark"
        @click="modalShow = false"
      />
    </template>
    <div class="form-add">
      <div class="form-group">
        <label for="">Username</label>
        <input type="text" v-model="username" />
      </div>
      <div class="form-group">
        <label for="">Email</label>
        <input type="text" v-model="email" />
      </div>
      <div class="form-group">
        <label for="">Phone</label>
        <input type="text" v-model="phone" />
      </div>
      <div class="form-group">
        <label for="">Address</label>
        <input type="text" v-model="address" />
      </div>
      <div class="form-group">
        <label for="">Role</label>
        <input type="text" v-model="role" />
      </div>
    </div>
    <template #footer>
      <button class="btns btn-closes" @click="modalShow = false">Close</button>
      <button class="btns btn-saves" @click="modalShow = false">Save</button>
    </template>
  </b-modal>
</template>