<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Box from "@/components/Box.vue";

const handleEnter = (el, percentage) => {
  el.style.width = `${percentage}%`;
  el.style.transition = `width 1.3s cubic-bezier(0.85, 0, 0.15, 1) 0.3s`;
};
export default {
  name: "SectionTwo",
  components: {
    DefaultLayout,
    Box,
  },
  data() {
    return {
      women: 40,
      men: 60,
    };
  },
  methods: {
    wBeforeEnter(el) {
      el.style.width = 0;
    },
    wEnter(el) {
      handleEnter(el, this.women);
    },
    mBeforeEnter(el) {
      el.style.width = 0;
    },
    mEnter(el) {
      handleEnter(el, this.men);
    },
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="gender-container">
      <transition appear @before-appear="wBeforeEnter" @after-appear="wEnter">
        <div class="left">
          <div class="percentage">{{ women }}%</div>
        </div>
      </transition>
      <transition appear @before-appear="mBeforeEnter" @after-appear="mEnter">
        <div class="right">
          <div class="percentage">{{ men }}%</div>
        </div>
      </transition>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.gender-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.left,
.right {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .percentage {
    font-size: 2rem;
    color: var(--color-white);
  }
}
.left {
  left: 0;
  background-color: #ff006e;
}
.right {
  right: 0;
  width: 50%;
}

/* @keyframes expand {
  from {
    width: 0;
  }

  to {
    width: 50%;
  }
}

.expand-enter-active {
  animation: expand 0.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}
.expand-leave-active {
  animation: expand 0.6s cubic-bezier(0.65, 0, 0.35, 1) reverse;
} */
</style>
