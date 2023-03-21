<template>
  <nav id="sidebar" :class="{ close: close }">
    <div class="logo">
      <router-link to="/admin" class="logo-icon">
        <img :src="imageIconPath" />
      </router-link>
      <router-link to="/admin" class="logo-text">
        <img :src="imageTextPath" />
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/admin" exact-active-class="active">
          <box-icon
            class="icon"
            name="category"
            color="#5F6A7A"
            size="20px"
          ></box-icon>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/post" exact-active-class="active">
          <box-icon
            class="icon"
            color="#5F6A7A"
            size="20px"
            name="book-open"
          ></box-icon>
          <span>Post</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/product" exact-active-class="active">
          <box-icon
            class="icon"
            color="#5F6A7A"
            size="20px"
            name="bar-chart-alt-2"
          ></box-icon>
          <span>Product</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/user" exact-active-class="active">
          <box-icon
            class="icon"
            color="#5F6A7A"
            size="20px"
            name="user"
          ></box-icon>
          <span>User</span>
        </router-link>
      </li>
    </ul>
    <ul class="mode">
      <li>
        <router-link to="/post" exact-active-class="active">
          <box-icon
            class="icon"
            color="#5F6A7A"
            size="20px"
            name="log-out"
          ></box-icon>
          <span>Logout</span>
        </router-link>
      </li>
      <li>
        <a href="#">
          <box-icon
            class="icon"
            color="#5F6A7A"
            size="20px"
            name="cog"
            animation="spin"
          ></box-icon>
          <span>Setting</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import imageIcon from "../../assets/images/icon.png";
import imageText from "../../assets/images/text.png";

export default {
  data() {
    return {
      imageIconPath: imageIcon,
      imageTextPath: imageText,
    };
  },
};
</script>






<style>
#wrapper-admin nav#sidebar {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid #e8ebed;
  position: fixed;
  transition: 0.5s all ease-in-out;
}

#wrapper-admin nav#sidebar div.logo {
  text-decoration: none;
  display: flex;
  width: 100%;
  min-height: 65px;
  align-items: center;
  border-bottom: 1px solid #e8ebed;
  padding: 0px 20px;
}

nav#sidebar div.logo a.logo-icon {
  margin-left: -3px;
  display: flex;
  justify-content: center;
  min-width: 44px;
}

#wrapper-admin nav#sidebar div.logo a.logo-text {
  margin-left: 2px;
  display: flex;
  transition: 0.5s all ease-in-out;
}

/* =============end logo=============== */

#wrapper-admin nav#sidebar ul.menu {
  padding: 15px;
  height: calc(100% - 150px);
}

#wrapper-admin nav#sidebar ul.mode {
  padding: 10px 15px;
  border-top: 1px solid #e8ebed;
  background-color: #fff;
}

#wrapper-admin nav#sidebar li {
  list-style: none;
}

#wrapper-admin nav#sidebar li a {
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  height: 38px;
  color: #5f6a7a;
  transition: all 0.2s ease;
  border-radius: 5px;
  margin-bottom: 6px;
}

#wrapper-admin nav#sidebar li a .icon {
  min-width: 49px;
  display: flex;
  justify-content: center;
}

#wrapper-admin nav#sidebar li a span {
  font-size: 14.5px;
  margin-left: 3px;
  margin-top: 3px;
  transition: 0.1s all ease-in-out;
  color: #5f6a7a;
}

#wrapper-admin nav#sidebar li a.active {
  background-color: #eef1f6;
}

#wrapper-admin nav#sidebar li a:hover {
  background-color: #eef1f6;
}
</style>