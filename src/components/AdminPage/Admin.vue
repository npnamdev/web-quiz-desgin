<template>
  <div id="wrapper-admin">
    <SidebarAdmin />
    <div id="wp-content-admin">
      <HeaderAdmin />
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "./HeaderAdmin.vue";
import SidebarAdmin from "./SidebarAdmin.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeaderAdmin,
    SidebarAdmin,
  },
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Mulish", sans-serif;
}

#wrapper-admin {
  display: flex;
}

#wrapper-admin #wp-content-admin {
  transition: all 0.5s ease-in-out;
  position: fixed;
  background-color: #fff;
  left: 250px;
  width: calc(100% - 250px);
}

#wrapper-admin #content-admin {
  margin-top: 85px;
  padding: 0px 15px;
  width: 100%;
  padding-right: 20px;
}

#wrapper-admin #content-admin h2 {
  font-weight: 500;
  font-size: 23px;
  color: #2e3033;
  margin-bottom: 25px;
}
</style>
