<template>
  <div id="header" class="">
    <box-icon
      class="menu-icon"
      name="menu"
      color="#333"
      size="24px"
      @click="toggleClose"
    ></box-icon>
    <div class="profile">
      <div class="box-left">
        <box-icon
          class="info-icon"
          name="bell"
          color="#5F6A7A"
          size="20px"
          animation="tada-hover"
        ></box-icon>
        <box-icon
          class="info-icon"
          name="message-detail"
          color="#5F6A7A"
          size="20px"
          animation="tada-hover"
        ></box-icon>
      </div>
      <div class="box-right user-info">
        <img :src="imageAvatarPath" />
      </div>
    </div>
  </div>
</template>



<script>
import imageAvatar from "../../assets/images/avatar.jpg";

export default {
  data() {
    return {
      imageAvatarPath: imageAvatar,
    };
  },
};
</script>


<style>
#wrapper-admin #header {
  position: fixed;
  background-color: #fff;
  width: calc(100% - 250px);
  padding: 0px 20px;
  padding-right: 20px;
  min-height: 65px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8ebed;
  justify-content: space-between;
  transition: 0.5s all ease-in-out;
}

#wrapper-admin #header .menu-icon {
  cursor: pointer;
}

#wrapper-admin #header .profile {
  display: flex;
  align-items: center;
  position: relative;
}

#wrapper-admin #header .profile .box-left {
  display: flex;
  align-items: center;
  margin-right: 23px;
}

#wrapper-admin #header .profile .box-left .info-icon {
  margin-left: 15px;
  cursor: pointer;
}

#wrapper-admin #header .profile .box-right {
  display: flex;
  align-items: center;
  cursor: pointer;
}

#wrapper-admin #header .profile .box-right img {
  width: 30px;
  border-radius: 50%;
}
</style>