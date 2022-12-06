<script>
import Navigation from "./components/Navigation.vue";
export default {
  data() {
    return {
      direction: "forward",
    };
  },
  components: {
    Navigation,
  },
  created() {
    window.addEventListener("wheel", this.handleWheel);
  },
  destroyed() {
    window.removeEventListener("wheel", this.handleWheel);
  },
  methods: {
    handleWheel(event) {
      const currentDepth = this.$route.meta.depth;
      const maxDepth =
        this.$router.getRoutes().filter((route) => {
          if (route.meta.depth >= 0) return true;
          return false;
        }).length - 1;
      const nextDepth = currentDepth + 1;
      const prevDepth = currentDepth - 1;

      if (event.deltaY > 0 && currentDepth < maxDepth)
        this.$router.push(`/${nextDepth}`);
      if (event.deltaY < 0 && currentDepth !== 0)
        this.$router.push(`/${prevDepth}`);
    },
  },
  watch: {
    $route(to, from) {
      const toDepth = to.meta.depth || 0;
      const fromDepth = from.meta.depth || 0;
      this.direction = toDepth >= fromDepth ? "forward" : "backward";
    },
  },
};
</script>

<template>
  <Navigation />
  <router-view v-slot="{ Component, route }">
    <transition :name="direction">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
// BACKWARD
.backward-enter-active,
.backward-leave-active {
  transition: all 0.75s ease-out;
}
.backward-enter-to {
  position: absolute;
  top: 0;
}
.backward-enter-from {
  position: absolute;
  top: -100%;
}
.backward-leave-to {
  position: absolute;
  bottom: -100%;
}
.backward-leave-from {
  position: absolute;
  bottom: 0;
}

// FORWARD
.forward-enter-active,
.forward-leave-active {
  transition: all 0.75s ease-out;
}
.forward-enter-to {
  position: absolute;
  bottom: 0;
}
.forward-enter-from {
  position: absolute;
  bottom: -100%;
}
.forward-leave-to {
  position: absolute;
  top: -100%;
}
.forward-leave-from {
  position: absolute;
  top: 0;
}
</style>
