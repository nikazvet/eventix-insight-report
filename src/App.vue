<template>
  <nav>
    <router-link to="/">Section One</router-link> |
    <router-link to="/2">Seciton Two</router-link>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>

  <!-- <router-view /> -->
  <!-- <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component is="Component" :key="$route.path"></component>
    </transition>
  </router-view> -->
</template>

<style scoped>
.slide-enter-active {
  animation: slide 0.35s ease-in;
}
.slide-leave-active {
}

/* .slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30%);
} */

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

nav {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
