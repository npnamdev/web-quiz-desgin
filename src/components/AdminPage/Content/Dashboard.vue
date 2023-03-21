<template>
  <div id="content-admin">
    <h2>Dashboard</h2>
    <ul class="row-1 box-dash">
      <li>
        <div class="box-left">
          <h3>80</h3>
          <span>Users</span>
        </div>
        <div class="box-right">
          <box-icon
            class="icon"
            color="#fff"
            size="19px"
            name="user"
          ></box-icon>
        </div>
      </li>
      <li>
        <div class="box-left">
          <h3>59</h3>
          <span>Post</span>
        </div>
        <div class="box-right">
          <box-icon
            class="icon"
            color="#fff"
            size="19px"
            name="book-open"
          ></box-icon>
        </div>
      </li>
      <li>
        <div class="box-left">
          <h3>75</h3>
          <span>Product</span>
        </div>
        <div class="box-right">
          <box-icon
            class="icon"
            color="#fff"
            size="19px"
            name="bar-chart-alt-2"
          ></box-icon>
        </div>
      </li>
      <li>
        <div class="box-left">
          <h3>23</h3>
          <span>Blog</span>
        </div>
        <div class="box-right">
          <box-icon
            class="icon"
            color="#fff"
            size="19px"
            name="pencil"
          ></box-icon>
        </div>
      </li>
    </ul>
  </div>
</template>


<style>
#content-admin ul.box-dash {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0;
}

#content-admin ul.box-dash li {
  list-style: none;
  border: 1px solid #dadfe2;
  width: 23.5%;
  height: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  cursor: pointer;
}

#content-admin ul.box-dash li .box-left h3 {
  font-size: 23px;
  font-weight: 500;
  margin-bottom: 5px;
}

#content-admin ul.box-dash li .box-left span {
  font-size: 14.5px;
  color: #344256;
}

#content-admin ul.box-dash li .box-right {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
}

#content-admin ul.box-dash li:nth-child(1) .box-right {
  background-color: #e1b12c;
}

#content-admin ul.box-dash li:nth-child(2) .box-right {
  background-color: #00a8ff;
}

#content-admin ul.box-dash li:nth-child(3) .box-right {
  background-color: #44bd32;
}

#content-admin ul.box-dash li:nth-child(4) .box-right {
  background-color: #8c7ae6;
}
</style>
