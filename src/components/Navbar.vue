<template>
  <nav :class="['navbar navbar-expand-lg bg-white py-3 fixed-top', {'shadow-sm': visibleShadow }]">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <router-link :to="{ name: 'Home' }" class="text-decoration-none">
          <img src="@/assets/vh-logo.png" height="40" alt="" />
        </router-link>
      </div>
      <div>
        <ul class="list-unstyled d-flex align-items-center m-0">
          <li 
            v-for="(item, index) of navItems"
            :key="`nav-item-${index+1}`"
            :class="['my-1', { 'ms-lg-5 ms-4': index > 0 }]"
          >
            <div
              :class="['cNavItem', {'active' : item.isActive }]"
              @click="item.action"
            >
              <h6 class="d-none d-md-block cTextDarkGray cTextRoute fw-bold m-0">
                {{ item.title }}
              </h6>
              <div class="d-md-none cNavIcon">
                <i :class="['cTextRoute cTextDarkGray', item.icon]"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script src="./js/navbar.js"></script>

<style scoped>
svg {
  font-size: 1em;
}

.cNavIcon {
  transition: 200ms ease all;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cLogoBrand {
  transition: 200ms ease all;
}

.cLogoBrand:hover {
  transform: rotateZ(360deg);
}

.cNavItem {
  cursor: pointer;
  font-size: 18px;
}

.cNavItem.active > .cTextRoute {
  color: #0092ca !important;
}

.cNavItem.active > .cNavIcon {
  background: #0092ca;
}
.cNavItem.active > .cNavIcon svg {
  color: white !important;
}
</style>