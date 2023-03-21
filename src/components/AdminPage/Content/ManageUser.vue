<template>
  <div id="content-admin">
    <h2>Manage User</h2>
    <div class="box-table">
      <div class="row-1">
        <div class="box-left">
          <select>
            <option value="">All Role</option>
            <option value="">User</option>
            <option value="">Admin</option>
          </select>
          <button>Apply</button>
        </div>
        <div class="box-right">
          <button @click="modalShow = true">
            <box-icon
              class="icon-add"
              color="#fff"
              size="15px"
              name="plus-circle"
            ></box-icon>
            Add User
          </button>
        </div>
      </div>
      <table class="row-2">
        <thead>
          <tr class="col-title">
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>admin</td>
            <td>admin@gmail.com</td>
            <td>0847436094</td>
            <td>Hà Nội</td>
            <td>admin</td>
            <td>
              <box-icon
                name="edit"
                color="#333"
                size="16px"
                class="icon-edit icon"
                animation="tada-hover"
              ></box-icon>
              <box-icon
                name="trash"
                color="#333"
                size="16px"
                class="icon-delete icon"
                animation="tada-hover"
              ></box-icon>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>user</td>
            <td>user@gmail.com</td>
            <td>0847436094</td>
            <td>Hồ Chí Minh</td>
            <td>user</td>
            <td>
              <box-icon
                name="edit"
                color="#333"
                size="16px"
                class="icon-edit icon"
                animation="tada-hover"
              ></box-icon>
              <box-icon
                name="trash"
                color="#333"
                size="16px"
                class="icon-delete icon"
                animation="tada-hover"
              ></box-icon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

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
      <div class="form-group">
        <label for="">Image</label>
        <input type="text" v-model="image" />
      </div>
    </div>
    <template #footer>
      <button class="btns btn-closes" @click="modalShow = false">Close</button>
      <button class="btns btn-saves" @click="modalShow = false">Save</button>
    </template>
  </b-modal>
</template>













<script>
import axios from "axios";

export default {
  data() {
    return {
      modalShow: false,
      users: [],
    };
  },
  async mounted() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.users = res.data;

      console.log(this.users);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>











<style>
#wrapper-admin #content-admin .box-table .row-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
}

#wrapper-admin #content-admin .box-table .row-1 .box-left {
  display: flex;
  align-items: center;
}

#wrapper-admin #content-admin .box-table .row-1 .box-left select {
  width: 200px;
  padding: 7px;
  outline: none;
  border: 1px solid #dadfe2;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

#wrapper-admin #content-admin .box-table .row-1 .box-left button {
  padding: 8px 15px;
  background-color: #1ba4be;
  color: #fff;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-left: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}

#wrapper-admin #content-admin .box-table .row-1 .box-left button:hover {
  background-color: #0caccc;
}

#wrapper-admin #content-admin .box-table .row-1 .box-right button {
  padding: 8px 12px;
  background-color: #1f9d54;
  color: #fff;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-left: 5px;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}

#wrapper-admin #content-admin .box-table .row-1 .box-right button:hover {
  background-color: #12ac52;
}

#content-admin .box-table .row-1 .box-right button .icon-add {
  margin-right: 3px;
}

#wrapper-admin #content-admin .box-table table.row-2,
th,
td {
  border-collapse: collapse;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

#wrapper-admin #content-admin .box-table table.row-2 {
  margin-top: 15px;
  width: 100%;
  text-align: left;
}

#wrapper-admin #content-admin .box-table table.row-2 th,
td {
  max-height: 40px;
  padding-left: 10px;
  line-height: 40px;
  font-size: 14.5px;
  color: #333;
}

#wrapper-admin #content-admin .box-table table.row-2 th {
  font-weight: 600;
}

#wrapper-admin #content-admin .box-table table.row-2 td .icon-edit {
  padding-right: 10px;
}

#wrapper-admin #content-admin .box-table table.row-2 tr:not(.col-title):hover {
  background-color: #eef1f6;
}
</style>
