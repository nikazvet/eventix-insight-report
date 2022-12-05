<template>
  <nav>
    <router-link to="/0">Section One</router-link> |
    <router-link to="/1">Section Two</router-link> |
    <router-link to="/2">Section Three</router-link>
  </nav>

  <router-view v-slot="{ Component }">
    <transition :name="direction">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      direction: "forward",
    };
  },

  watch: {
    $route(to, from) {
      // const prev = this.$route.path.match(/\d+/)[0];
      const prev = from.path.length > 1 ? from.path.match(/\d+/)[0] : 0;
      const next = to.path.match(/\d+/)[0];
      // console.log(prev);
      // prev < next ? console.log("moved forward") : console.log("moved prev");
      prev < next
        ? (this.direction = "forward")
        : (this.direction = "backward");
    },
  },
};
</script>

<style scoped>
.forward-enter-active {
  animation: forward 0.35s ease-in;
}
/* .forward-leave-active {
  animation: backward 0.35s ease-in;
} */
.backward-enter-active {
  animation: backward 0.35s ease-in;
}
/* .backward-leave-active {
  animation: forward 0.35s ease-in;
} */

@keyframes backward {
  0% {
    opacity: 0;
    transform: translateY(-30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes forward {
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
