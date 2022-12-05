<template>
  <nav>
    <router-link to="/0">Section One</router-link> |
    <router-link to="/1">Section Two</router-link> |
    <router-link to="/2">Section Three</router-link>
  </nav>

  <router-view v-slot="{ Component, route }">
    <transition :name="direction">
      <component :is="Component" :key="route.path" />
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
      const prev = from.path.length > 1 ? Number(from.path.match(/\d+/)[0]) : 0;
      const next = Number(to.path.match(/\d+/)[0]);
      prev < next
        ? (this.direction = "forward")
        : (this.direction = "backward");
    },
  },
};
</script>

<style scoped lang="scss">
$time: 0.5s;
$delay: 0s;

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
//
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

/* .forward-enter-active {
  animation: forwardIn $time ease-in $delay;
}
.forward-leave-active {
  animation: forwardOut $time ease-in $delay;
}

.backward-enter-active {
  animation: backwardIn $time ease-in $delay;
}
.backward-leave-active {
  animation: backwardOut $time ease-in $delay;
} */

/* @keyframes backwardIn {
  0% {
    opacity: 0;
    transform: translateY(-30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes backwardOut {
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(30%);
  }
}

@keyframes forwardIn {
  0% {
    opacity: 0;
    transform: translateY(30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes forwardOut {
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(-30%);
  }
} */

nav {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
